import React from "react";
import { NavLink } from "react-router-dom";

export default function TopProductBox({ title, imgPath, productId }) {
  return (
    <NavLink to={`/kala/${productId}`}>
      <div className="top_products_bx mb-15" title={title}>
        <img
          alt="/"
          className="img_icon"
          src={`./assets/images/${imgPath}.png`}
        />

        <div className="title_top_bx">
          <div>{title}</div>
          <div className="mark_to">&rsaquo;</div>
        </div>
      </div>
    </NavLink>
  );
}
