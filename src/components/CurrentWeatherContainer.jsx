import React from "react";
import { useSelector } from "react-redux";
import { useFetchDataFromStore } from "../hooks/useFetchDataFromStore";
import InfoComponent from "./InfoItemComponent";
import { names } from "../names";
import MainCurrentInfoComponent from "./MainCurrentInfoComponent";
import AverageInfoPerDayComponent from "./AverageInfoPerDayComponent";
import LoaderComponent from "./UI/LoaderComponent";
import { getLoadingStatus } from "../utils/getLoadingStatus";

export default function CurrentWeatherContainer({ isLoading }) {
  const { searchReq, language } = useSelector((state) => state.slicesReducer);
  const unit = useSelector((state) => state.slicesReducer.unit);
  const currentData = useFetchDataFromStore()?.data || {};

  const { name, region } = currentData?.location || {};

  const { [`mintemp_${unit}`]: mintemp, [`maxtemp_${unit}`]: maxtemp } =
    currentData?.forecast?.forecastday[0].day || {};

  const infoItems = [
    {
      title: names[language].feelslike.long,
      unit: names.unitSymb[unit],
      value: currentData.current?.[`feelslike_${unit}`],
    },
    { title: names[language].vis.km, value: currentData.current?.vis_km },
    { title: names[language].gust.kph, value: currentData.current?.gust_kph },
  ];

  return (
    <div className="current-weather-wrapper">
      {getLoadingStatus(currentData) ? (
        <div>
          <MainCurrentInfoComponent
            value={currentData.current[`temp_${unit}`]}
            city={name}
            region={region}
            condition={currentData.current.condition?.text}
            conditionImg={currentData.current.condition?.icon}
            mintemp={mintemp}
            maxtemp={maxtemp}
            minValueName={names[language].temp.min.long}
            maxValueName={names[language].temp.max.long}
            unitSymb={names.unitSymb[unit]}
          />
          <div className="info-container">
            {infoItems.map((el, index) => (
              <InfoComponent
                key={index}
                title={el.title}
                unit={el?.unit}
                value={el.value}
              />
            ))}
          </div>
          <AverageInfoPerDayComponent
            language={language}
            unitSymb={names.unitSymb[unit]}
            unit={unit}
            days={currentData.forecast.forecastday}
          />
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}
