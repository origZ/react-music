import React, { memo } from 'react'
import { ResidentArtistWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { shallowEqual, useSelector } from 'react-redux'
import { formatImageUrl } from '@/utils/format'

const ResidentArtist = memo(() => {
  const { artistList } = useSelector((state) => ({
    artistList: state.recommend.artistList
  }), shallowEqual)
  return (
    <ResidentArtistWrapper>
      <AreaHeaderV2 title="入驻歌手" moreName="查看全部&gt;" moreLink="/discover/artist" />
      <div className="artistlist">
        {
          artistList.map((item) => {
            return (
              <a href="/discover/artist" className='item' key={item.id}>
                <img src={formatImageUrl(item.picUrl, 62)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="desc textNowrap">{item.alias.join(' ')}</div>
                </div>
              </a>
            )
          })
        }
      </div>
      <div className="apply">
        <a href="https://music.163.com/st/musician">申请成为网易音乐人</a>
      </div>
    </ResidentArtistWrapper>
  )
})

export default ResidentArtist