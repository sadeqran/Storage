import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItems = ({ icon, title, path }) => {
  return (
      <NavLink to={path}>
    <li className="li_items_sidebar">
        <div className="icon_items_sidebar">
          <i className={icon}></i>
        </div>
        <div className="title_items_sidebar">{title}</div>
    </li>
      </NavLink>
  );
};

export default SidebarItems;
