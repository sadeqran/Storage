import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { setDashboardChart } from "./dashboardChart";

const Dashboard = () => {
  useEffect(() => {
    const labels = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ];
    const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];
    setDashboardChart(labels, datapoints);
  }, []);

  return (
    <div className="dashboard faj">
      {/* <Navbar /> */}
      <div className="moraba">
        <div className="side bxshadow">
          <div className="header faj">
            <img
              className="talyImg"
              src="https://talypark.com/wp-content/uploads/2022/12/Logo-Talypark.png"
            />
            <h4>تالی پارک</h4>
          </div>
          <ul className="list faj">
            <li className="li_list">
              <i className="icon_list fa-solid fa-user"></i>
              <span className="title_list">کاربران</span>
            </li>
          </ul>
        </div>
        <div className="context">
          <div className="header_context"></div>
          <div className="blue_box bxshadow"></div>
          <div className="middle">
            <div className="total_box bxshadow"></div>
            <div className="total_box mr-25 bxshadow"></div>
          </div>
          <div className="white_box bxshadow">
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
