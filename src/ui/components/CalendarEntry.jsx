import { getDay, getMinutes, getHours, parseISO } from "date-fns";
import cx from "./CalendarEntry.module.scss";

export const CalendarEntry = ({ entry, groupColors }) => {
  const headerSpan = 2;
  const entryTimeSpanInMinutes = 30;
  const halfHoursInAnHour = 2;
 
  const gridColumn = headerSpan + getDay(parseISO(entry.dateStart));
  const gridRowStart =
    headerSpan +
    getHours(parseISO(entry.dateStart)) * halfHoursInAnHour +
    getMinutes(parseISO(entry.dateStart)) / entryTimeSpanInMinutes;
  const gridRowEnd =
    headerSpan +
    getHours(parseISO(entry.dateEnd)) * halfHoursInAnHour +
    getMinutes(parseISO(entry.dateEnd)) / entryTimeSpanInMinutes;

  return (
    <div
      className={cx.entry}
      style={{
        gridColumn,
        gridRowStart,
        gridRowEnd,

        backgroundColor: groupColors[entry.group],
      }}
    >
      <span>{entry.title}</span>
      <span>{entry.subtitle}</span>
    </div>
  );
};
