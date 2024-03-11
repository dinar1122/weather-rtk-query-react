import React from "react";
import ForeacastWeatherComponent from "./ForecastWeatherComponent";
import { useSelector } from "react-redux";
import { useFetchDataFromStore } from "../hooks/useFetchDataFromStore";
import LoaderComponent from "./UI/LoaderComponent";
import { getLoadingStatus } from "../utils/getLoadingStatus";

export default function ForecastWeatherContainer() {
  const { searchReq, language } = useSelector((state) => state.slicesReducer);
  const unit = useSelector((state) => state.slicesReducer.unit);

  const forecastData =
    useFetchDataFromStore(searchReq)?.data?.forecast?.forecastday || {};

  return (
    <div className="forecast-main-container">
      {getLoadingStatus(forecastData) ? (
        forecastData.map((dayElement) => (
          <ForeacastWeatherComponent
            day={dayElement}
            key={dayElement.date}
            unit={unit}
            language={language}
          />
        ))
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}
