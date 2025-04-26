import React from "react";

import "./chart.css";
import { Candle } from "../Chart/Candle/Candle";

export const Chart = () => {
  const data = [
    {
      time: 0,
      startValue: 0,
      endValue: 10,
      highValue: 15,
      lowValue: 5,
      volume: 100,
    },
    {
      time: 1,
      startValue: 10,
      endValue: 20,
      highValue: 25,
      lowValue: 5,
      volume: 200,
    },
    {
      time: 2,
      startValue: 20,
      endValue: 15,
      highValue: 30,
      lowValue: 10,
      volume: 300,
    },
    {
      time: 3,
      startValue: 15,
      endValue: 40,
      highValue: 35,
      lowValue: 5,
      volume: 400,
    },
  ];
  return (
    <svg viewBox="0 0 100 100" width="500" height="500">
      <g transform="scale(1, -1) translate(0, -100)">
        {data.map((item) => (
          <Candle
            time={item.time}
            startValue={item.startValue}
            endValue={item.endValue}
            highValue={item.highValue}
            lowValue={item.lowValue}
            // volume={item.volume}
          />
        ))}
      </g>
    </svg>
  );
};
