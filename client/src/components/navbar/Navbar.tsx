import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/logoIcon.svg" alt="" className="logo-image" />
          <span>Amrindra</span>
        </Link>
      </div>

      <div className="icons">
        <img src="/searchIcon.svg" alt="" className="icon" />
        <img src="/appIcon.svg" alt="" className="icon" />
        <img src="/expandIcon.svg" alt="" className="icon" />

        <div className="notification">
          <img src="/notification.svg" alt="" />
          <span>1</span>
        </div>

        <div className="user">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span className="username">Amrin</span>
        </div>

        <img src="/settingIcon.svg" alt="" className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
