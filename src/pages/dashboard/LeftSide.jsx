import React from "react";
import TopProductBox from "../../components/TopProductBox";

export default function LeftSide() {
  return (
    <div className="left_side">
      <div className="header_left_side">
        <div className="search_box">
          <input className="search_box" placeholder="جست و جو" />
          <button className="search-btn bxshadow">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <button className="alert_btn faj bxshadow">
          <div className="num_alert_btn faj">2</div>
          <i className="fa-regular fa-bell"></i>
        </button>
      </div>

      <div className="top bxshadow">
        <div className="title_bx">پرکاربرد ترین</div>
        <div className="top_products">
          <TopProductBox title={"کیبورد"} imgPath={"keyboard"} />
          <TopProductBox title={"موس"} imgPath={"mouse"} />
          <TopProductBox title={"مانیتور"} imgPath={"monitor"} />
          <TopProductBox title={"کارتریج"} imgPath={"printer"} />
          <TopProductBox title={"کیس"} imgPath={"sys"} />
        </div>
      </div>

      <div className="mb-20"></div>

      <div className="total_bx_out bxshadow faj">
        <div className="title_bx top_225">خروجی</div>
        <div className="inventory">
          <div className="num">155</div>
          <div className="num_span">مورد</div>
        </div>
        <button className="upload_btn out_btn bxshadow">
          خروجی <i className="fas fa-download mr-1"></i>
        </button>
      </div>
    </div>
  );
}
