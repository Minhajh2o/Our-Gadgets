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
        transform="rotate(-30)"
      >
        {truncatedLabel}
      </text>
    </g>
  );
};

const Chart = ({ gadgetsData }) => {
  // Calculate minimum width based on number of products (similar to sidebar approach)
  const minWidth = gadgetsData.length * 80; // 80px per product for better spacing

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div
        className="min-w-full md:w-full"
        style={{ minWidth: `${Math.max(minWidth, 600)}px` }}
      >
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart
            data={gadgetsData}
            margin={{
              top: 50,
              right: 30,
              bottom: 80,
              left: 30,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />

            <XAxis
              dataKey="product_title"
              tick={<CustomizedAxisTick />}
              interval={0}
              height={10}
            />

            <YAxis
              yAxisId="left"
              label={{ value: "Price ($)", angle: -90, position: "insideLeft" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 5]}
              label={{ value: "Rating", angle: 90, position: "insideRight" }}
            />
            <Tooltip />
            <Legend
              verticalAlign="bottom"
              wrapperStyle={{
                paddingTop: "80px",
              }}
            />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="price"
              fill="rgba(149,56,226,0.15)"
              stroke="rgba(149,56,226,0.15)"
            />
            <Bar yAxisId="left" dataKey="price" barSize={20} fill="#9538E2" />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="rating"
              stroke="#ff7300"
              fill="red"
              strokeWidth={2}
              dot={{ fill: "#ff7300", strokeWidth: 2, r: 3 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
