import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchRecommendData } from './store/recommend'
import TopBanner from './c-cpns/top-banner/inedx'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'

const Recommend = memo(() => {
  const dispatch = useDispatch()
  // 请求轮播图数据
  useEffect(() => {
    dispatch(fetchRecommendData())
  }, [dispatch])
  return (
    <RecommendWrapper>
      <TopBanner/>
      <div className='content wrapper02'>
        <div className="left">
          <HotRecommend/>
          <NewAlbum/>
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
})

export default Recommend