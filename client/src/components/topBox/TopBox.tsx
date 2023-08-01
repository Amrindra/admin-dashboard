import "./TopBox.scss";
import { topDealUsers } from "../../utils/data";

const TopBox = () => {
  return (
    <div className="top-box">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user-wrapper">
              <img src={user.img} alt={`${user.username} profile picture`} />
              <div className="user-texts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <div className="amount">${user.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
