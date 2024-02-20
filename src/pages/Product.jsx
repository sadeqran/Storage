import React from "react";
import Sidebar from "./dashboard/Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Product() {
  return (
    <div className="dashboard faj">
      <div className="moraba_vasat">
        <Sidebar />
        {/* <div className="product_context">
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
        </div> */}
        <div className="paginated_table ">
          <div className="header_paginated_table">محصولات</div>
          <table className="table table-striped">
          <thead>
          <tr className="">
            <th scope="col">Id</th>
            <th scope="col">محصول</th>
            <th scope="col">واحد کالا</th>
            <th scope="col">مکان</th>
            <th scope="col">تاریخ</th>
            <th scope="col">عملیات</th>
          </tr>
        </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
