import React from "react";
import { useKarbar } from "./userContext";
import Tr from "./Tr";

const Users = () => {
  const karbar = useKarbar();
  return (
    <>
      <h1 className="h1">کاربران</h1>
      <button className="add_product">
        <i className="fa-solid fa-plus"></i>
      </button>
      <table className="table table-striped">
        <thead>
          <tr className="bg-p">
            <th scope="col">Id</th>
            <th scope="col">نام کاربری</th>
            <th scope="col">نام</th>
            <th scope="col">نقش</th>
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
              <td>{i.role}</td>
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
              <Tr />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
