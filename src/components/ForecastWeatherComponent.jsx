import React, { useEffect, useState } from "react";
import { getDayOfWeek } from "../utils/getDayOfWeek";
import { names } from "../names";
import { Bar } from "react-chartjs-2";
import { tempPerHourDataset } from "../datasets/datasets";

export default function ForeacastWeatherComponent({ day, unit, language }) {
  const [tempPerHourData, setTempPerHourData] = useState(
    tempPerHourDataset({ day, unit })
  );
  const updateTempPerHourData = () => {
    setTempPerHourData(tempPerHourDataset({ day, unit }));
  };
  useEffect(() => {
    updateTempPerHourData();
  }, [unit]);

  const dayOfWeek = getDayOfWeek(day.date);
  return (
    <div className="forecast-day-item">
      <div className="forecast-day-item-child-left">
        <div className="default-block forecast-title-left">
          {day.day.condition.text}
        </div>
        <div className="forecast-middle-left">
          <img
            className="img-main-info"
            src={day.day.condition.icon}
            alt={day.day.condition.text}
          />
          <div>
            {names[language].temp.avg.short}
            {names.unitSymb[unit]}:{day.day[`avgtemp_${unit}`]}
          </div>
        </div>
        <div className="default-block forecast-desc-left">
          <div>
            {names[language].temp.max.short}:
            <strong>{day.day[`maxtemp_${unit}`]}</strong>
          </div>
          <div>
            {names[language].temp.min.short}:
            <strong>{day.day[`mintemp_${unit}`]}</strong>
          </div>
        </div>
      </div>
      <div className="forecast-day-item-child-right">
        <div style={{ display: "flex" }}>
          <div className="default-block forecast-title-right">
            <div>
              {day.date} {dayOfWeek}
            </div>
          </div>
        </div>
        <div className="forecast-chart">
          <Bar data={tempPerHourData} />
        </div>
      </div>
    </div>
  );
}
