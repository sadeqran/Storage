import React from "react";
import { useProducts } from "./productsContext";
import Tr from "./Tr";

const Main = () => {
  const products = useProducts();
  return (
    <div>
      <h1 className="h1">انبار</h1>
      <button className="add_product">
        <i className="fa-solid fa-plus"></i>
      </button>
      <table className="table table-striped">
        <thead>
          <tr className="bg-p">
            <th scope="col">Id</th>
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
              <Tr />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
