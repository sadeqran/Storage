import React, { useEffect, useState } from "react";
import { setDashboardChart } from "./dashboardChart";
import jMoment from "moment-jalaali";

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

const SaleChart = () => {
  const [loading, setLoading] = useState(false);
  const handleGetChartInfo = async () => {
    setLoading(true);

    setLoading(false);
    if (res.status === 200) {
      const monthsOrdersArr = [];
      const now = jMoment();
      let thisMonth = now.jMonth();
      for (let i = 0; i < 12; i++) {
        if (thisMonth === -1) thisMonth = 11;
        monthsOrdersArr.push({ month: thisMonth, amount: 0 });
        thisMonth--;
      }

      const orders = res.data.data;
      for (const order of orders) {
        const moment = jMoment(order.pay_at);
        const monthIndex = moment.jMonth();
        const index = monthsOrdersArr.findIndex((o) => o.month === monthIndex);
        monthsOrdersArr[index].amount =
          monthsOrdersArr[index].amount + parseInt(order.pay_amount);
      }

      monthsOrdersArr.reverse();
      setDashboardChart(
        monthsOrdersArr.map((o) => labels[o.month]),
        monthsOrdersArr.map((o) => o.amount / 1000000)
      );
    }
  };
  useEffect(() => {
    handleGetChartInfo();
  }, []);
  return (
    <>
      <canvas id="myChart" height="195"></canvas>
    </>
  );
};

export default SaleChart;
