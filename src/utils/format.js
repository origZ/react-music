// 格式化数字,大于10亿显示xx亿,大于10万显示xx万
export function formatCount(count) {
  if (count > 1000000000) {
    return Math.floor(count / 100000000) + '亿'
  } else if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

// 拼接图片URL
export function formatImageUrl(imgurl, w, h = w) {
  return imgurl + `?param=${w}x${h}`
}

// 获取音源地址
export function getSongPlayUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

// 格式化时间
export function formatTime (time = 0) {
  const timesSeconds = time / 1000
  const minute = Math.floor(timesSeconds / 60)
  const second = Math.floor(timesSeconds) % 60

  const formatMinute = String(minute).padStart(2, '0')
  const formatSecond = String(second).padStart(2, '0')
  return `${formatMinute}:${formatSecond}`
}