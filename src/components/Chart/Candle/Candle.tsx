import React from "react";

// import "./chart.css";

export const Candle = ({ time, startValue, endValue, highValue, lowValue }) => {
    // candle color
    const candleColor = startValue > endValue ? "#ff0000" : "#00ff00"; // red for down, green for up
  return (
    <>
      <rect
        x={5 + 15 * time}
        y={Math.min(endValue, startValue)}
        width="10"
        height={Math.abs(endValue - startValue)}
        fill={candleColor}
        stroke={candleColor}
        strokeWidth="2"
      />
      <line
        x1={5 + 15 * time + 5}
        y1={highValue}
        x2={5 + 15 * time + 5}
        y2={lowValue}
        stroke={candleColor}
        strokeWidth="2"
      />
      {/* <rect
        x={5 + 15 * time}
        y="0"
        width="10"
        height={highValue - lowValue}
        fill="none"
        stroke={candleColor}
        strokeWidth="2"
      /> */}
    </>
  );
};
