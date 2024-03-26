import React from "react";
import Sidebar from "./dashboard/Sidebar";

export default function Kala() {
  return (
    <div className="dashboard faj">
      <div className="moraba_vasat">
        <Sidebar />

        <div className="product_context_kala">
          <div className="product_mng_box bxshadow" data-aos="zoom-in-down">
            <i className="fa-solid fa-download "></i>
            <span className="product_mng_title">خروجی</span>
          </div>
          <div className="product_mng_box bxshadow" data-aos="zoom-in-down">
            <i className="fa-solid fa-upload "></i>
            <span className="product_mng_title">ورودی</span>
          </div>
          <div className="product_mng_box bxshadow" data-aos="zoom-in-down">
            <i className="fa-solid fa-repeat"></i>
            <span className="product_mng_title">جابجایی</span>
          </div>
          <div className="product_mng_box bxshadow" data-aos="zoom-in-down">
            <i className="fa-solid fa-cart-shopping"></i>{" "}
            <span className="product_mng_title">سفارش</span>
          </div>
        </div>
      </div>
    </div>
  );
}
