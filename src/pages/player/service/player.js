import WyyRequest from "@/service";

export function getSongDetail (ids) {
  return WyyRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongLyric (id) {
  return WyyRequest.get({
    url: '/lyric',
    params: {
      id
    }
  })
}