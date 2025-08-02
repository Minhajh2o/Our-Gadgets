import React from "react";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Scatter,
  Line,
} from "recharts";

// This custom component is correct.
const CustomizedAxisTick = ({ x, y, payload }) => {
  const maxChars = 10;
  const label = payload.value;
  const truncatedLabel =
    label.length > maxChars ? `${label.substring(0, maxChars)}...` : label;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-45)"
      >
        {truncatedLabel}
      </text>
    </g>
  );
};

const Chart = ({ gadgetsData }) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <ComposedChart
        data={gadgetsData}
        margin={{
          top: 50,
          right: 30,
          bottom: 50,
          left: 30,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />

        <XAxis
          dataKey="product_title"
          tick={<CustomizedAxisTick />}
          // 1. Add interval={0} to force every label to be rendered.
          interval={0}
          // 2. Restore a sufficient height for the rotated labels.
          height={30}
        />

        <YAxis yAxisId="left" label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }} />
        <YAxis yAxisId="right" orientation="right" domain={[0, 5]} label={{ value: 'Rating', angle: 90, position: 'insideRight' }}/>
        <Tooltip />
        <Legend
          verticalAlign="bottom"
          wrapperStyle={{
            paddingTop: '70px',
          }}
        />
        <Area yAxisId="left" type="monotone" dataKey="price" fill="rgba(149,56,226,0.15)" stroke="rgba(149,56,226,0.15)" />
        <Bar yAxisId="left" dataKey="price" barSize={20} fill="#9538E2" />
        <Line yAxisId="right" type="monotone" dataKey="rating" stroke="#ff7300" fill="red" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;