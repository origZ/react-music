import styled from "styled-components";

export const PlayBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;

  > .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`

export const Control = styled.div`
  display: flex;
  align-items: center;

  .prev, .next {
    width: 28px;
    height: 28px;
  }
  .prev {
    background-position: 0 -130px;
  }
  .next {
    background-position: -80px -130px;
  }

  .play {
    margin: 0 8px;
    width: 36px;
    height: 36px;
    background-position: 0 ${props => props.isPlaying ? '-165px' : '-204px'};
  }
`

export const PlayInfo = styled.div`
  display: flex;
  align-items: center;
  width: 642px;
  box-sizing: border-box;

  > .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
    img {
      width: 34px;
      height: 34px;
    }
  }

  > .info {
    flex: 1;
    margin-left: 10px;
    color: #a1a1a1;

    .song {
      position: relative;
      top: 8px;
      left: 8px;
      font-size: 14px;
      color: #e1e1e1;

      .singer-name {
        margin-left: 10px;
        color: #a1a1a1;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          inset-block-start: 4px;
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
          &::after {
            content: none;
          }
          &::before {
            content: none;
          }
        }
      }

      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }

`

export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    
    .volume {
      background-position: -2px -248px;
    }

    .playmode {
      background-position: ${props => {
        switch(props.playMode) {
          case 1:
            return "-66px -248px";
          case 2:
            return "-66px -344px";
          default:
            return "-3px -344px";
        }
      }};
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`