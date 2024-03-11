import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getDayOfWeek } from "../utils/getDayOfWeek";
import { avgtempDataset, averageTempChartOptions } from "../datasets/datasets";
import { names } from "../names";

export default function AverageInfoPerDayComponent({
  days,
  unit,
  unitSymb,
  language,
}) {
  const daysName = getDayOfWeek(
    days.map((day) => day.date),
    language
  );
  
  const [averageTempPerDayData, setUserData] = useState(
    avgtempDataset({ daysName, unit, days })
  );

  function updateChartData() {
    setUserData(avgtempDataset({ daysName, unit, days }));
  }

  useEffect(() => {
    updateChartData();
  }, [unit, language]);

  return (
    <div className="main-current-info-container">
      <div className="top-main-info" style={{ justifyContent: "center" }}>
        <div>
          {names[language].chartAvgTemp} ({unitSymb})
        </div>
      </div>
      <div className="middle-main-info" style={{ marginBottom: 0 }}>
        <div className="line-chart-avg-temp">
          <Line
            data={averageTempPerDayData}
            options={averageTempChartOptions()}
          />
        </div>
      </div>
    </div>
  );
}
