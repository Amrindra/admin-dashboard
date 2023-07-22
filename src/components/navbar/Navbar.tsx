import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="" alt="" className="logo-image" />
        <span>Amrindra</span>
      </div>

      <div className="icons">
        <img src="/searchIcon.svg" alt="" className="icon" />
        <img src="" alt="" className="icon" />
        <img src="" alt="" className="icon" />
        <div className="notification"></div>
        <div className="user"></div>
        <img src="" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
