import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchRecommendData, fetchRankingData} from './store/recommend'
import TopBanner from './c-cpns/top-banner/inedx'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/ranking'

const Recommend = memo(() => {
  const dispatch = useDispatch()
  // 请求数据
  useEffect(() => {
    dispatch(fetchRecommendData())
    dispatch(fetchRankingData())
  }, [dispatch])
  return (
    <RecommendWrapper>
      <TopBanner/>
      <div className='content wrapper02'>
        <div className="left">
          <HotRecommend/>
          <NewAlbum/>
          <TopRanking/>
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
})

export default Recommend