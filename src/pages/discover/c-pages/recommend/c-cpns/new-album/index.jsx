import React, { memo, useRef } from 'react'
import { Carousel } from 'antd'
import { NewAlbumWrapper } from './style'
import AreaHeader from '@/components/area-header'
import { useSelector } from 'react-redux'
import AlbumItem from '@/components/album-item'

const NewAlbum = memo(() => {
  const { albums } = useSelector((state) => ({
    albums: state.recommend.newAlbums
  }))
  const newAlbumRef = useRef()

  const handlePre = () => {
    newAlbumRef.current.prev()
  }
  const handleNext = () => {
    newAlbumRef.current.next()
  }

  return (
    <NewAlbumWrapper>
      <AreaHeader title="新碟上架" link="/discover/album" />
      <div className="content">
        <button className='sprite_02 arrow arrow-left' onClick={handlePre}></button>
        <div className="banner">
          <Carousel dots={false} speed={1200} ref={newAlbumRef} >
            {
              [0, 1].map((item) => {
                return (
                  <div key={item}>
                    <div className='album-list'>
                    {
                      albums.slice(item * 5, (item + 1) * 5).map((data) => {
                        return (
                          <AlbumItem key={data.id} itemData={data} />
                        )
                      })
                    }
                    </div>
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className='sprite_02 arrow arrow-right' onClick={handleNext}></button>
      </div>
    </NewAlbumWrapper>
  )
})

export default NewAlbum