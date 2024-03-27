import React, { memo } from 'react'
import { RankingItemWrapper } from './style'
import { formatImageUrl } from "@/utils/format";
import { useDispatch } from 'react-redux';
import { fetchCurrentSongAction } from '@/pages/player/store/player';
const RankingItem = memo((props) => {
  const {itemData} = props
  const { tracks = [] } = itemData
  const dispatch = useDispatch()
  function handelPlayClick(id) {
    dispatch(fetchCurrentSongAction(id))
  }

  return (
    <RankingItemWrapper>
      <div className='top'>
        <div className="image">
          <img src={formatImageUrl(itemData.coverImgUrl, 80)} alt="" />
          <a href="/discover/ranking" className="sprite_cover">{itemData.name}</a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <button className='sprite_02 btn play'></button>
            <button className='sprite_02 btn favor'></button>
          </div>
        </div>
      </div>
      <div className="detail">
        {
          tracks?.slice(0, 10)?.map((item, index) => {
            return (
              <div className="list" key={item.id}>
                <div className="index">{index + 1}</div>
                <div className="info">
                  <div className="name textNowrap">{item.name}</div>
                  <div className="indicator">
                    <button className='btn sprite_02 play' onClick={() => handelPlayClick(item.id)}></button>
                    <button className='btn sprite_icon2 add'></button>
                    <button className='btn sprite_02 favor'></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="bottom">
        <a href="/discover/ranking">查看更多&gt;</a>
      </div>
    </RankingItemWrapper>
  )
})

export default RankingItem