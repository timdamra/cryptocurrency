import React from 'react'
import { Chart } from "react-charts"

export default function LineChart(props) {

  return (
    <div
      style={{
        width: '100%',
        height: '25vh'
      }}
    >
      <Chart
        data={props.data}
        axes={[
          { primary: true, type: "linear", position: "bottom" },
          { type: "linear", position: "left" }
        ]}
      />
    </div>
  )
}
