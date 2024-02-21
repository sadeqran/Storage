import React from "react";
import Sidebar from "./dashboard/Sidebar";
import { useProducts } from "../context/productsContext";
import Actions from "../components/Actions";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Product() {
  const products = useProducts();
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
        <div className="product_context ">
          <div className="header_paginated_table faj">محصولات</div>
          <button className="add_product">
            <i className="fa-solid fa-plus"></i>
          </button>
          <table className="table table-striped">
            <thead>
              <tr className="header_tr_table">
                <th className="right-top-radius"  scope="col">Id</th>
                <th scope="col">محصول</th>
                <th scope="col">واحد کالا</th>
                <th scope="col">مکان</th>
                <th scope="col">تاریخ</th>
                <th scope="col">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {products.map((d) => (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.product}</td>
                  <td>{d.quantity}</td>
                  <td>{d.location}</td>
                  <td>{d.added_at}</td>
                  <Actions />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
