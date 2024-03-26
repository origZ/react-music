import styled from "styled-components";

export const AnchorWrapper = styled.div`
  padding: 20px;
  .anchorList {
    margin-top: 15px;

    .item {
      display: flex;
      margin-bottom: 10px;
      width: 210px;
      
      img {
        width: 40px;
        height: 40px;
        }

      .info {
        margin-left: 8px;
        width: 160px;
        font-size: 14px;

        .name {
          margin-top: 3px;
        }

        .desc {
          color: #666;
        }
      }
    }
  }
`