import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleSearchIconClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img
          src="https://img.icons8.com/fluency/100/control-panel.png"
          alt=""
          className="icon logo-image"
        />
        <span>Amrindra</span>
      </Link>

      <div className="icons">
        <div className="search-wrapper">
          <div className={`search-bar ${isExpanded ? "expanded" : ""}`}>
            <input
              type="search"
              className="search-input"
              placeholder="Search..."
              style={{ display: isExpanded ? "block" : "none" }}
            />
            {/* <img
              src="/searchIcon.svg"
              alt=""
              className="icon"
              style={{ display: isExpanded ? "block" : "none" }}
            /> */}
          </div>
          <div className="search-icon" onClick={handleSearchIconClick}>
            <img src="/searchIcon.svg" alt="" className="icon" />
          </div>
        </div>

        {/* <img src="/searchIcon.svg" alt="" className="icon" /> */}
        {/* <img src="/appIcon.svg" alt="" className="icon" />
        <img src="/expandIcon.svg" alt="" className="icon" /> */}

        <div className="notification">
          <img src="/notification.svg" alt="" />
          <span>1</span>
        </div>

        <div className="user">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          {/* <span className="username">Amrin</span> */}
        </div>

        <img src="/settingIcon.svg" alt="" className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
