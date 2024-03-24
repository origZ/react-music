import WyyRequest from "@/service";

export function getBanners() {
  return WyyRequest.get({
    url: '/banner'
  })
}

export function getHotRecommends(limit = 30) {
  return WyyRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}