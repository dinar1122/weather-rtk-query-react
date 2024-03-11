import { useSelector } from "react-redux";

export const useFetchDataFromStore = () => {
  return useSelector((state) => {
    const queryKeys = Object.keys(state.weatherApi.queries);
    queryKeys.sort(
      (a, b) => state.weatherApi.queries[a].startedTimeStamp - state.weatherApi.queries[b].startedTimeStamp
      );
      const lastKey = queryKeys[queryKeys.length - 1];
    return state.weatherApi.queries[lastKey];
  });
};
