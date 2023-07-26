import { Link } from 'react-router-dom';
import './ChartBox.scss';

const ChartBox = () => {
  return (
    <div className="chart-box-container">
      <div className="box-info">
        <div className="title-section">
          <img src="/userIcon.svg" alt="" className="" />
          <span>Total Users</span>
        </div>
        <h3>11.323</h3>
        <Link to="/">View All</Link>
      </div>
      <div className="chart-info">
        <div className="chart"></div>
        <div className="texts"></div>
      </div>
    </div>
  );
};

export default ChartBox;
