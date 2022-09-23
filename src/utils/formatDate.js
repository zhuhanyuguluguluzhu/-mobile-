import dayjs from "dayjs";

export function formatDate(date, formatStr = "MM月DD日") {
  return dayjs(date).format(formatStr);
}
export function getIntervalDate(startDate, endDate) {
  // dayjs的diff方法
  return dayjs(endDate).diff(startDate, "day");
}
