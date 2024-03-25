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

export function getNewAlbums() {
  return WyyRequest.get({
    url: '/album/newest',
  })
}

export function getRankings(id) {
  return WyyRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}