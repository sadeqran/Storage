import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { setDashboardChart } from "./dashboardChart";

const Dashboard = () => {
  // useEffect(() => {
  //   const labels = [
  //     "فروردین",
  //     "اردیبهشت",
  //     "خرداد",
  //     "تیر",
  //     "مرداد",
  //     "شهریور",
  //     "مهر",
  //     "آبان",
  //     "آذر",
  //     "دی",
  //     "بهمن",
  //     "اسفند",
  //   ];
  //   const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];
  //   setDashboardChart(labels, datapoints);
  // }, []);

  return (
    <div className="dashboard faj">
      {/* <Navbar /> */}
      <div className="moraba">
        <div className="side bxshadow">
          <div className="header_side faj">
            <img
              className="talyImg"
              src="https://talypark.com/wp-content/uploads/2022/12/Logo-Talypark.png"
            />
            <h4></h4>
          </div>
          <ul className="list faj">
            {/* <li className="li_list">
              <i className="icon_list fa-solid fa-user"></i>
              <span className="title_list">کاربران</span>
            </li> */}
          </ul>
        </div>
        <div className="context">
          <div className="header_context">
            <div className="welcome">
              <h6 className="h6_welcome">خوش آمدی ،</h6>
              <h4 className="h3_welcome">
                <strong>صادق رنجبر</strong>
              </h4>
            </div>
            <button className="upload bxshadow">
              آپلود<i className="fas fa-upload mr-1"></i>
            </button>
          </div>
          <div className="blue_box bxshadow"></div>
          <div className="middle">
            <div className="total_box bxshadow"></div>
            <div className="mx-20"></div>
            <div className="total_box bxshadow"></div>
          </div>
          <div className="white_box bxshadow">
            {/* <canvas id="myChart"></canvas> */}
          </div>
        </div>
        <div className="ads">
          <div className="header_ads">
            <input className="search" />
            <button className="alert_btn bxshadow">
              <i className="fa-regular fa-bell"></i>
            </button>
          </div>
          <div className="top bxshadow">
            <div className="title_bx">پرکاربرد ترین</div>
            <div className="top_products">
              <div className="top_products_bx">
                <img className="img_icon" src="./assets/images/keyboard.png" />
                کیبورد
              </div>
              <div className="top_products_bx">
                {" "}
                <img className="img_icon" src="./assets/images/mouse.png" />
                موس
              </div>
              <div className="top_products_bx">
                {" "}
                <img className="img_icon" src="./assets/images/monitor.png" />
                مانیتور
              </div>
              <div className="top_products_bx">
                {" "}
                <img className="img_icon" src="./assets/images/printer.png" />
                کارتریج
              </div>
              <div className="top_products_bx">
                <img className="img_icon" src="./assets/images/sys.png" />
                کیس
              </div>
            </div>
          </div>
          <div className="my-20"></div>
          <div className="balance bxshadow faj">
            <button className="upload balance_btn bxshadow">
              دانلود <i className="fas fa-download mr-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
