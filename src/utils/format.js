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