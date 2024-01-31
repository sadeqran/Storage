import Chart from "chart.js/auto";

export const setDashboardChart = (labels, datapoints) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "خروجی",
        data: datapoints,
        borderColor: "#0062ff",
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "آخرین خروجی ها",
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: false,
          title: {
            display: true,
            // text: 'زمان'
          },
        },
        y: {
          display: false,
          title: {
            display: true,
            text: "تعداد",
          },
          // suggestedMin: -10,
          // suggestedMax: 200
        },
      },
    },
  };

  const ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, config);
};
