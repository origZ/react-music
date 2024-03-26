import styled from "styled-components";

export const ResidentArtistWrapper = styled.div`
  padding: 20px;

  .artistlist {
    .item {
      display: flex;
      margin-top: 14px;
      height: 62px;
      background-color: #fafafa;
      text-decoration: none;
      &:hover {
        background-color: #f4f4f4;
      }

      img {
        width: 62px;
        height: 62px;
        object-fit: cover;
      }

      > .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 3px 12px;
        border: 1px solid #e9e9e9;
        border-left: none;
        overflow: hidden;

        .name {
          font-size: 14px;
          font-weight: 700;
        }

        .desc {
          font-size: 12px;
          color: #666;
        }
      }
    }
  }

  > .apply {
    margin-top: 12px;

    a {
      display: block;
      height: 31px;
      line-height: 31px;
      text-align: center;
      border-radius: 4px;
      border: 1px solid #c4c4c4;
      color: #333;
      font-size: 12px;
      font-weight: 700;
      text-decoration: none;
      &:hover {
        border-color: #dedddd;
      }
    }
  }
`