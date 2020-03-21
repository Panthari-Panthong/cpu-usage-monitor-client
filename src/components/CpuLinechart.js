import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import auth from './auth';
import {withRouter} from 'react-router-dom'

function CpuLinechart(props) {
  return (
    <div className="area-graph">
      <AreaChart
        width={1000}
        height={400}
        data={props.data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          ticks={[0, 20, 40, 60, 80, 100]}
          domain={[0, 100]}
          stroke="#4e4e4e"
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="percent"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
      <button onClick={() => {
        auth.login(() => {
          props.history.push("/")
        })
      }}>logout</button>
    </div>
  );
}

export default withRouter(CpuLinechart);
