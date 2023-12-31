import "./BarChartBox.scss";
import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
} from "recharts";

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarChartBox = (props: Props) => {
  return (
    <div className="bar-chart-box">
      <h3>{props.title}</h3>
      <div className="chart-wrapper">
        <ResponsiveContainer width="99%" height={100}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
