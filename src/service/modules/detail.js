import myRequest from "../request/request";

export function getDetailInfos(houseId) {
  return myRequest.get({
    url: "/detail/infos",
    params: {
      houseId,
    },
  });
}
