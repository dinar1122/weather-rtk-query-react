import { useSelector } from "react-redux";
import { names } from "../names";

export const getDayOfWeek = (dayUnformatted) => {
  const { language } = useSelector((state) => state.slicesReducer);
  const { daysOfWeek } = names[language];

  return Array.isArray(dayUnformatted)
    ? dayUnformatted.map((date) => daysOfWeek[new Date(date).getDay()])
    : daysOfWeek[new Date(dayUnformatted).getDay()];
};
