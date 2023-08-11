import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./AreaChartBox.scss";

const AreaChartBox = () => {
  const data = [
    {
      name: "Sun",
      books: 4000,
      clothes: 2400,
      electronic: 2400,
    },
    {
      name: "Mon",
      books: 3000,
      clothes: 1398,
      electronic: 2210,
    },
    {
      name: "Tue",
      books: 2000,
      clothes: 9800,
      electronic: 2290,
    },
    {
      name: "Wed",
      books: 2780,
      clothes: 3908,
      electronic: 2000,
    },
    {
      name: "Thu",
      books: 1890,
      clothes: 4800,
      electronic: 2181,
    },
    {
      name: "Fri",
      books: 2390,
      clothes: 3800,
      electronic: 2500,
    },
    {
      name: "Sat",
      books: 3490,
      clothes: 4300,
      electronic: 2100,
    },
  ];

  return (
    <div className="area-chart-box">
      <h3>Revenue</h3>
      <div className="chart-wrapper">
        <ResponsiveContainer width={"99%"} height={200}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#209ff6"
              fill="#209ff6"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#62b638"
              fill="#62b638"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#FFBB28"
              fill="#FFBB28"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChartBox;
