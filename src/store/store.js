import { combineReducers } from "redux";
import { weatherAPI } from "../services/WeatherService";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import slicesReducer from "./reducers/Slices";

const rootReducer = combineReducers({
  slicesReducer,
  [weatherAPI.reducerPath]: weatherAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (thunk) => thunk().concat(weatherAPI.middleware),
  });
};
