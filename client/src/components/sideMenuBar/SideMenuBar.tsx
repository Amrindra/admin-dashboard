import "./SideMenuBar.scss";
import { NavLink } from "react-router-dom";
import { menu } from "../../utils/data";

const SideMenuBar = () => {
  return (
    <nav className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          {/* <span className="title">{item.title}</span> */}
          {item.listItems.map((listItem) => (
            // <div className="list-item">
            <NavLink
              to={listItem.url}
              key={listItem.id}
              className={`list-item ${(navData: any) =>
                navData.isActive ? "active " : ""}`}
            >
              <img src={listItem.icon} alt={`${listItem.title} icon`} />
              <span className="list-item-title">{listItem.title}</span>
            </NavLink>
            // </div>
          ))}
        </div>
      ))}
    </nav>
  );
};

export default SideMenuBar;
