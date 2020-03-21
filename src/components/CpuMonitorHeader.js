import React from 'react';

function CpuMonitorHeader(props) {

  return (
    <div>
      <h1>CPU Usage - {props.usage} %</h1>
    </div>
  );
}

export default CpuMonitorHeader;