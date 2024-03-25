import styled from "styled-components"

export const RankingItemWrapper = styled.div`
  width: 230px;
  &:last-child {
    width: 228px;
  }

  > .top {
    display: flex;
    margin: 20px 0 0 20px;
    height: 100px;

    > .image {
      width: 80px;
      height: 80px;
      position: relative;

      img {
        width: 80px;
        height: 80px;
      }

      > a {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        text-indent: -9999px;
        background-position: -145px -57px;
      }
    }

    > .info {
      margin: 5px 0 0 10px;

      > .name {
        font-size: 14px;
        font-weight: 700;
        color: #333;
      }

      .btn {
        margin: 8px 10px 0 0;
        width: 22px;
        height: 22px;
        cursor: pointer;
      }

      .play {
        background-position: -267px -205px;
        &:hover {
          background-position: -267px -235px;
        }
      }

      .favor {
        background-position: -300px -205px;
        &:hover {
          background-position: -300px -235px;
        }
      }
    }
  }

  > .detail {
    .list {
      display: flex;
      align-items: center;
      height: 32px;

      &:nth-child(-n + 3) .index {
        color: #c10d0c;
      }

      > .index {
        margin-left: 10px;
        width: 35;
        text-align: center;
        font-size: 16px;
      }

      > .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
        width: 160px;
        height: 17px;
        

        &:hover {
          .indicator {
            display: block;
          }
        }
        
        > .name {
          flex: 1;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }

        > .indicator {
          display: flex;
          align-items: center;
          width: 82px;
          display: none;

          .btn {
            margin-left: 8px;
            width: 17px;
            height: 17px;
            cursor: pointer;
          }

          .play {
            background-position: -267px -268px;
            &:hover {
              background-position: -267px -288px;
            }
          }
          .add {
            background-position: 0 -700px;
            position: relative;
            top: 2px;
            &:hover {
              background-position: -22px -700px;
            }
          }
          .favor {
            background-position: -297px -268px;
            &:hover {
              background-position: -297px -288px;
            }
          }
        }
      }
    }
  }

  > .bottom {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
    height: 32px;
  }
`