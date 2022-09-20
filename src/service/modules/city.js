import myRequest from "../request/request";

export function getCityAll() {
  return myRequest.get({
    url: "/city/all",
  });
}
