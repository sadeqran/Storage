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

        <div className="product_context ">
          <div className="header_paginated_table faj">محصولات</div>
          <button className="add_product_btn btn-success">
            <i className="fa-solid fa-plus"></i>
          </button>
          <div className="jadval">
            <table className="table table-striped">
              <thead>
                <tr className="header_tr_table">
                  <th className="right-top-radius" scope="col">
                    Id
                  </th>
                  <th scope="col">محصول</th>
                  <th scope="col">موجودی</th>
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
                    <td>{d.added_at}</td>
                    <Actions />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
