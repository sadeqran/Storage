import React from "react";

const Tr = () => {
  return (
    <td>
      <i
        className="fa-solid fa-circle-info px-2 btn-outline-success"
        title="جزییات"
      ></i>
      <i className="fa-solid fa-trash px-2 btn-outline-danger" title="حذف"></i>
      <i
        className="fa-solid fa-pen px-2 btn-outline-warning"
        title="ویرایش"
      ></i>
    </td>
  );
};

export default Tr;
