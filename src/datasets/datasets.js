import { useState } from "react";

export const avgtempDataset = ({ daysName, unit, days }) => ({
  labels: daysName,
  datasets: [
    {
      label: unit === "c" ? "°C" : "F",
      data: days.map((day) => day.day[`avgtemp_${unit}`]),
      backgroundColor: ["rgba(75,192,192,1)"],
      borderColor: "black",
      order: 1,
      borderWidth: 1,
    },
  ],
});
export const tempPerHourDataset = ({ day, unit }) => ({
  labels: day.hour.map((data) =>
    data.time.slice(data.time.length - 5, data.time.length)
  ),
  datasets: [
    {
      label: unit === "c" ? "°C" : "F",
      data: day.hour.map((data) => data[`temp_${unit}`]),
      backgroundColor: ["rgba(75,192,192,1)"],
      borderColor: "black",
      borderWidth: 1,
    },
  ],
});
export const averageTempChartOptions = () => ({
  layout: {
    padding: 10,
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 11,
        },
      },
    },
  },
  maintainAspectRatio: false,
});