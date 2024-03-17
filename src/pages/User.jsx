import React from "react";
import Sidebar from "./dashboard/Sidebar";
import { useKarbar } from "../context/userContext";
import Actions from "../components/Actions";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Product() {
  const karbar = useKarbar();
  return (
    <div className="dashboard faj">
      <div className="moraba_vasat">
        <Sidebar />

        <div className="product_context ">
          <div className="header_paginated_table faj">کاربران</div>
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
                  <th scope="col">نام کاربری</th>
                  <th scope="col">نام</th>
                  <th scope="col">راه ارتباطی</th>
                  <th scope="col">پروفایل</th>
                  <th scope="col">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {karbar.map((i) => (
                  <tr key={i.id}>
                    <td>{i.id}</td>
                    <td>{i.username}</td>
                    <td>{i.name}</td>
                    <td>{i.link}</td>
                    <td className="avatar my-2 border-0">
                      <span className="avatar_box">
                        <img
                          className="w-100 rounded-circle bxshadow"
                          src={i.imgPath}
                          alt="/"
                        />
                      </span>
                    </td>
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
