/* Add current date to the footer */
// document.getElementById("javascript-date").innerHTML = new Date().getFullYear();
/* Chart initialisations */
/* Line Chart */

window.chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(126, 161, 255)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};

var config = {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: new Date().getFullYear(),
        backgroundColor: "#8FB9A8",
        borderColor: "#8FB9A8",
        data: [65, 78, 66, 44, 56, 67, 75],
        fill: false,
      },
      {
        label: new Date().getFullYear() - 1,
        fill: false,
        backgroundColor: "#F1828D",
        borderColor: "#F1828D",
        data: [40, 68, 86, 74, 56, 60, 87],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    title: {
      display: false,
      text: "Sales Charts",
      fontColor: "white",
    },
    legend: {
      labels: {
        fontColor: "white",
      },
      align: "end",
      position: "bottom",
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,.7)",
          },
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Month",
            fontColor: "white",
          },
          gridLines: {
            display: false,
            borderDash: [2],
            borderDashOffset: [2],
            color: "rgba(33, 37, 41, 0.3)",
            zeroLineColor: "rgba(0, 0, 0, 0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,.7)",
          },
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Value",
            fontColor: "white",
          },
          gridLines: {
            borderDash: [3],
            borderDashOffset: [3],
            drawBorder: false,
            color: "rgba(255, 255, 255, 0.15)",
            zeroLineColor: "rgba(33, 37, 41, 0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
          },
        },
      ],
    },
  },
};
var ctx = document.getElementById("line-chart").getContext("2d");
window.myLine = new Chart(ctx, config);

/* Bar Chart */
config = {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: new Date().getFullYear(),
        backgroundColor: "#F1828D",
        borderColor: "#F1828D",
        data: [30, 78, 56, 34, 100, 45, 13],
        fill: false,
        barThickness: 8,
      },
      {
        label: new Date().getFullYear() - 1,
        fill: false,
        backgroundColor: "#8FB9A8",
        borderColor: "#8FB9A8",
        data: [27, 68, 86, 74, 10, 4, 87],
        barThickness: 8,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    title: {
      display: false,
      text: "Orders Chart",
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    legend: {
      labels: {
        fontColor: "rgba(0,0,0,.4)",
      },
      align: "end",
      position: "bottom",
    },
    scales: {
      xAxes: [
        {
          display: false,
          scaleLabel: {
            display: true,
            labelString: "Month",
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: "rgba(33, 37, 41, 0.3)",
            zeroLineColor: "rgba(33, 37, 41, 0.3)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Value",
          },
          gridLines: {
            borderDash: [2],
            drawBorder: false,
            borderDashOffset: [2],
            color: "rgba(33, 37, 41, 0.2)",
            zeroLineColor: "rgba(33, 37, 41, 0.15)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
          },
        },
      ],
    },
  },
};
ctx = document.getElementById("bar-chart").getContext("2d");
window.myBar = new Chart(ctx, config);

var randomScalingFactor = function () {
  return Math.round(Math.random() * 100);
};

var config = {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          window.chartColors.red,
          window.chartColors.orange,
          window.chartColors.yellow,
          window.chartColors.green,
          window.chartColors.blue,
        ],
        label: "Dataset 1",
      },
    ],
    labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
  },
  options: {
    responsive: true,
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
      text: "Click on colors to interact",
      fontColor: "white",
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};

var ctx = document.getElementById("dognut-chart").getContext("2d");
window.myDoughnut = new Chart(ctx, config);

var config = {
  type: "doughnut",
  data: {
    datasets: [
      {
        label: "Sales",
        percent: 68,
        backgroundColor: [window.chartColors.blue],
      },
    ],
  },
  plugins: [
    {
      beforeInit: (chart) => {
        const dataset = chart.data.datasets[0];
        chart.data.labels = [dataset.label];
        dataset.data = [dataset.percent, 100 - dataset.percent];
      },
    },
    {
      beforeDraw: (chart) => {
        var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;
        ctx.restore();
        var fontSize = (height / 150).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = "#9b9b9b";
        ctx.textBaseline = "middle";
        var text = chart.data.datasets[0].percent + "%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ],
  options: {
    maintainAspectRatio: false,
    cutoutPercentage: 85,
    circumference: Math.PI,
    rotation: Math.PI,
    legend: {
      display: false,
    },
    tooltips: {
      filter: (tooltipItem) => tooltipItem.index == 0,
    },
  },
};

var ctx = document.getElementById("progress-chart").getContext("2d");
window.myDoughnut = new Chart(ctx, config);
