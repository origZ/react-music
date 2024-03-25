import React, { memo } from 'react'
import { TopRankingWrapper } from './style'
import AreaHeader from '@/components/area-header'
import { shallowEqual, useSelector } from 'react-redux'
import RankingItem from '../ranking-item'

const TopRanking = memo(() => {
  const { rankings } = useSelector((state) => ({
    rankings: state.recommend.rankings
  }), shallowEqual)
  return (
    <TopRankingWrapper>
      <AreaHeader title='榜单' link='/discover/ranking' />
      <div className="content">
        {
          rankings.map((item) => {
            return (
              <RankingItem key={item} itemData={item} />
            )
          })
        }
      </div>
    </TopRankingWrapper>
  )
})

export default TopRanking