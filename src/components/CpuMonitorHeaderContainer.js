import React, { Component } from "react";
import request from "superagent";
import CpuMonitorHeader from "./CpuMonitorHeader";
import CpuLinechart from "./CpuLinechart";

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
    const url = "http://localhost:4000";
    request
      .get(`${url}/usage`)
      .then(response => {
        this.setState({
          usage: response.body.usage,
          second: this.state.second + 1,
          data: [
            ...this.state.data,
            {
              percent: this.state.usage,
              name: this.state.second + "s"
            }
          ]
        });     
      })
      .catch(console.error);
  }



  render() {
    return (
      <div>
        <CpuMonitorHeader usage={this.state.usage} />
        <CpuLinechart data={this.state.data} />
      </div>
    );
  }
}

export default CpuMonitorHeaderContainer;
