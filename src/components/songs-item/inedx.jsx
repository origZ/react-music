import React, { memo } from 'react'
import { ItemWrapper } from './style'
import {formatImageUrl, formatCount} from '@/utils/format'
const SongsItem = memo((props) => {
  const {itemData} = props

  return (
    <ItemWrapper>
      <div className="top">
        <img className='image' src={formatImageUrl(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </ItemWrapper>
  )
})

export default SongsItem