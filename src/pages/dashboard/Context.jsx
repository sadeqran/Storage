import React, { useEffect } from "react";
import { setDashboardChart } from "../../utils/dashboardChart";
import WhiteBox from "../../components/WhiteBox";

export default function Context() {
  // useEffect(() => {
  //   const labels = ["فروردین", "اردیبهشت", "خرداد", "تیر"];
  //   const datapoints = [0, 100, 0, 20];
  //   setDashboardChart(labels, datapoints);
  // }, []);
  return (
    <div className="context">
      <div className="header_context">
        <div className="welcome">
          <h6 className="h6_welcome">خوش آمدی ،</h6>
          <h4 className="h3_welcome">
            <strong>صادق رنجبر</strong>
          </h4>
        </div>

        <button className="upload_btn bxshadow">
          ورودی<i className="fas fa-upload mr-1"></i>
        </button>
      </div>

      <div className="blue_box bxshadow faj">
        زندگی همینه ، ازش نترس ، ادامه بده
      </div>

      <div className="middle">
        <WhiteBox title={"موجودی"} num={"1,134"} />

        <div className="mx-10"></div>

        <WhiteBox title={"سفارشات"} num={"4"} />
      </div>

      <div className="white_box bxshadow faj">
        <canvas id="myChart"></canvas>
      </div>
    </div>
  );
}
