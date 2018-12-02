import React from "react";
import {
  LineChart,
  Line,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area
} from "recharts";

export default function Diagram(props) {
  let details = props.data.map(item => {
    return {
      name: item.readAt.substr(0, 10),
      kWh: item.kWh
    };
  });

  return (
    <AreaChart
      width={1044}
      height={250}
      data={details}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorkWh" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />

      <Area
        type="monotone"
        dataKey="kWh"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorkWh)"
      />
    </AreaChart>
  );
}
