import React, { Component } from "react";
import request from "superagent";
import CpuMonitor from "./CpuMonitor";

class CpuMonitorHeaderContainer extends Component {
  state = {
    usage: 0,
    second: 1,
    data: []
  };

  componentDidMount() {
    setInterval(() => {
      this.getData();
    }, 1000);
  }

  getData() {
    const url = "https://guarded-reaches-76881.herokuapp.com";
    request
      .get(`${url}/usage`)
      .then(response => {
        var today = new Date();
        var time =
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds();
        this.setState({
          usage: response.body.usage,
          second: this.state.second + 1,
          data: [
            ...this.state.data,
            {
              percent: this.state.usage,
              name: time
            }
          ]
        });
      })
      .catch(console.error);
  }

  render() {
    return <CpuMonitor usage={this.state.usage} data={this.state.data} />;
  }
}

export default CpuMonitorHeaderContainer;
