import dayjs from "dayjs";

export function formatDate(date) {
  return dayjs(date).format("MM月DD日");
}
export function getIntervalDate(startDate, endDate) {
  // dayjs的diff方法
  return dayjs(endDate).diff(startDate, "day");
}
