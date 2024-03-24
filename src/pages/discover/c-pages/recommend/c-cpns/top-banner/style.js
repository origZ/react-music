import styled from "styled-components";

export const BannerWrapper = styled.div`
  background: url(${(props) => props.bannerUrl}) center center/6000px;
  >.banner {
    height: 270px;
    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  
  .banner-item {
    height: 270px;
    >a {
      display: block;
      img {
        width: 100%;
      }
    }
  }

`

export const BannerRight = styled.div`
  width: 254px;
  height: 270px;
  background: url(${require('@/assets/img/download.png')}) no-repeat 0 0;
  
  >.download {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    text-indent: -9999px;
    &:hover {
    background: url(${require('@/assets/img/download.png')}) 0 -290px;
    }
  }

  >.desc {
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
    color: #8d8d8d;
  }
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  translate: 0 -50%;
  height: 63px;


  >.btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;
  }

  >.left {
    left: -68px;
    background-position: 0 -360px;
  }

  >.right {
    right: -68px;
    background-position: 0 -508px;
  }
`