import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherAPI = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://api.weatherapi.com/v1" }),
  endpoints: (build) => ({
    fetchWeatherByQuery: build.query({
      query: (req) => ({
        url: "/forecast.json",
        params: {
          key: "143c42161ef14231895202745240903",
          q: req.searchReq,
          lang: req.lang,
          days: req.limitForecastDay,
        },
      }),
    }),
  }),
});
