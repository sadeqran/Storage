import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ icon, title, path }) => {
  return (
    <li className="sidebar_item">
      <NavLink to={path}>
        <span className="icon">
          <i className={icon}></i>
        </span>
        <span className="title">{title}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
