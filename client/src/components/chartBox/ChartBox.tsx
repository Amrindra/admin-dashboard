import { Link } from "react-router-dom";
import "./ChartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className="chart-box-container">
      <div className="chart-info">
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "Red" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">This month</span>
        </div>
      </div>

      <div className="box-info">
        <div className="title-section">
          {/* <img src={props.icon} alt="" /> */}
          <h6>{props.title}</h6>
        </div>
        <p>{props.number}</p>
        <Link to="/" style={{ color: props.color }}>
          View All
        </Link>
      </div>
    </div>
  );
};

export default ChartBox;
