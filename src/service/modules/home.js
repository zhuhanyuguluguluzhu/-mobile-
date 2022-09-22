import myRequest from "../request/request";

export function getHotSuggests() {
  return myRequest.get({
    url: "/home/hotSuggests",
  });
}
export function getCategories() {
  return myRequest.get({
    url: "/home/categories",
  });
}
export function getHouseList() {
  return myRequest.get({
    url: "/home/houselist",
    //get->params  post ->data
    params: {
      page: 1,
    },
  });
}
