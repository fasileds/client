/** @jsxImportSource @emotion/react */
import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { css } from "@emotion/react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const chartContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default function Graph({ statuse }) {
  console.log(statuse);
  const options = {
    animationEnabled: true,
    title: {
      text: "Monthly Income",
    },
    axisX: {
      title: "Month",
      interval: 1, // Show every month
      labelAngle: -45, // Rotate labels if needed
    },
    axisY: {
      title: "Income",
      suffix: " B",
    },
    data: [
      {
        type: "splineArea",
        xValueFormatString: "MMM", // Display only month abbreviation
        yValueFormatString: "#,##0.## $",
        showInLegend: true,
        legendText: "Income",
        dataPoints: statuse.map((item) => ({
          label: item.month, // Set month name as the label
          y: item.amount, // Set amount as the y-value
        })),
      },
    ],
  };

  return (
    <div css={chartContainerStyle}>
      <CanvasJSChart options={options} />
    </div>
  );
}
