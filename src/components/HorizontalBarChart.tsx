import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type RectangleProps,
} from "recharts";

export type ChartItem = {
  label: string;
  value: number;
  color: string;
};

interface HorizontalBarChartProps {
  title: string;
  data: ChartItem[];
}

interface CustomBarProps extends RectangleProps {
  payload?: ChartItem;
}

function CustomBar({ payload, ...props }: CustomBarProps) {
  return (
    <Rectangle
      {...props}
      fill={payload?.color ?? "#8884d8"}
      radius={[0, 999, 999, 0]}
    />
  );
}

export default function HorizontalBarChart({
  title,
  data,
}: HorizontalBarChartProps) {
  return (
    <div className="bg-background p-6 w-full">
      <h3 className="font-medium mb-4 text-xl">{title}</h3>

      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 5,
              right: 20,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid horizontal={false} strokeDasharray="3 3" />

            <XAxis type="number" />

            <YAxis type="category" dataKey="label" width={140} />

            <Tooltip />

            <Bar dataKey="value" barSize={18} shape={<CustomBar />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
