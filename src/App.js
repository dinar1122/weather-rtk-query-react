import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import { weatherAPI } from "./services/WeatherService";
import CurrentWeatherComponent from "./components/CurrentWeatherContainer";
import ForeacastWeatherContainer from "./components/ForecastWeatherContainer";
import { useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";
import LoaderComponent from "./components/UI/LoaderComponent";

Chart.register(...registerables);

function App() {
  const { searchReq, limitForecastDay, language } = useSelector(
    (state) => state.slicesReducer
  );
  const req = { searchReq: searchReq, limitForecastDay: limitForecastDay, lang: language };
  const { error, isLoading, refetch } = weatherAPI.useFetchWeatherByQueryQuery(req);
  const errorMessage = error?.data.error.message;

  useEffect(() => {
    refetch();
  }, [searchReq, refetch, limitForecastDay, language]);

  if (errorMessage) {
    return (
      <div className="App">
        <Header />
        <h1>
          <div className="default-block">{errorMessage}</div>
        </h1>
      </div>
    );
  }

  if (isLoading) {
    return <LoaderComponent/>;
  }
  return (
    <div className="App">
      <Header />
      <div className="main ">
        <CurrentWeatherComponent />
        <ForeacastWeatherContainer />
      </div>
    </div>
  );
}

export default App;
