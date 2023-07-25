import './SideMenuBar.scss';
import { Link } from 'react-router-dom';

const SideMenuBar = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">MAIN</span>
        <Link to="/" className="list-item">
          <img src="/homeIcon.svg" alt="homepage Icon" />
          <span className="list-item-title">Home</span>
        </Link>
        <Link to="/" className="list-item">
          <img src="/profileIcon.svg" alt="homepage Icon" />
          <span className="list-item-title">Profile</span>
        </Link>
      </div>

      <div className="item">
        <span className="title">MAIN</span>
        <Link to="/" className="list-item">
          <img src="/homeIcon.svg" alt="homepage Icon" />
          <span className="list-item-title">Home</span>
        </Link>
        <Link to="/" className="list-item">
          <img src="/profileIcon.svg" alt="homepage Icon" />
          <span className="list-item-title">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default SideMenuBar;
