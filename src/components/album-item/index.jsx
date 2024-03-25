import React, { memo } from 'react'
import { AlbumItemWrapper } from './style'
import { formatImageUrl } from "@/utils/format";
const AlbumItem = memo((props) => {
  const { itemData } = props
  return (
    <AlbumItemWrapper>
      <div className='top'>
        <img src={formatImageUrl(itemData.picUrl, 100)} alt="" />
        <a href={itemData.picUrl} className='cover sprite_cover'>{itemData.picUrl}</a>
      </div>
      <div className='bottom'>
        <div className='desc textNowrap'>{itemData.name}</div>
        <div className='artist textNowrap'>{itemData.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  )
})

export default AlbumItem