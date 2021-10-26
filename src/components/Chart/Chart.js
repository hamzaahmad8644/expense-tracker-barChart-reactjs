import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const datePointValues = dataPoints.map(dataPoint => {
    return dataPoint.value;
  });
  const totalMaximum = Math.max(...datePointValues);

  return (
    <div className="chart">
      {dataPoints.map(dataPoint => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
