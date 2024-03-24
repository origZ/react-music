import React, { memo } from 'react'
import { HotWrapper } from './styled'
import AreaHeader from '@/components/area-header'
import { useSelector } from 'react-redux'
import SongsItem from '@/components/songs-item/inedx'

const HotRecommend = memo(() => {
  const { hotRecommends } = useSelector((state) => ({
    hotRecommends: state.recommend.hotRecommends
  }))
  return (
    <HotWrapper>
      <AreaHeader 
      title="热门推荐" 
      keywords={['华语', '流行', '摇滚', '民谣', '电子']}
      link="/discover/songs" />
      <div className='recommend-list'>
        {
          hotRecommends.map((item) => {
            return (
              <SongsItem itemData={item} key={item.id}/>
            )
          })
        }
      </div>
    </HotWrapper>
  )
})

export default HotRecommend