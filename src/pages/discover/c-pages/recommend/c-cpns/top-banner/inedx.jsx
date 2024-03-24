import React, { memo, useCallback, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Carousel } from 'antd';
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

const TopBanner = memo(() => {
  // 记录状态
  const [currentIndex, setCurrentInedx] = useState(0)
  const bannerRef = useRef()
  // 从store中获取banner数据
  const { banners } = useSelector((state) => ({
    banners: state.recommend.banners
  }), shallowEqual)
  // 事件处理函数
  function preImage() {
    bannerRef.current.prev()
  }
  function nextImage() {
    bannerRef.current.next()
  }
  // 拿到下一个图片的索引,并记录
  const handleBannerChange = useCallback((current, next) => {
    setCurrentInedx(next)
  }, [])

  // 根据索引拿到图片的URL
  let bannerUrl = banners[currentIndex] && (banners[currentIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <BannerWrapper bannerUrl={bannerUrl}>
      <div className='banner wrapper02'>
        <BannerLeft>
          <Carousel autoplay effect='fade' ref={bannerRef} beforeChange={handleBannerChange} >
            {
              banners.map((item) => {
                return (
                  <div className='banner-item' key={item.imageUrl}>
                    <a href={item.imageUrl} target='_blank rel="noreferrer"'>
                      <img src={item.imageUrl} alt="" />
                    </a>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <a href="/download" className='download'>下载客户端</a>
          <p className='desc'>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRight>
        <BannerControl>
          <button className='btn left' onClick={preImage} ></button>
          <button className='btn right' onClick={nextImage} ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

export default TopBanner