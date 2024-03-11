import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchReq: "Казань",
  unit: "c",
  language: "ru",
  limitForecastDay: 7,
};

export const slice = createSlice({
  name: "searchReq",
  initialState,
  reducers: {
    setSearchReq(state, action) {
      state.searchReq = action.payload;
    },
    setUnit(state, action) {
      state.unit = action.payload;
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setlimitForecastDay(state, action) {
      state.limitForecastDay = action.payload;
    },
  },
});
export default slice.reducer;
