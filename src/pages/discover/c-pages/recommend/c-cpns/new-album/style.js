import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
  margin-top: 20px;

  >.content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 37px;
    padding: 0 5px;
    height: 186px;
    border: 1px solid #d3d3d3;
    background-color: #f5f5f5;

    .arrow {
      position: relative;
      top: -12px;
      width: 17px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;
      left: -4px;
      &:hover {
        background-position: -280px -75px;
      }
    }

    .arrow-right {
      background-position: -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }

    >.banner {
      overflow: hidden;
      flex: 1;

      .album-list {
        display: flex;
        justify-content: space-between;
        
      }
    }
  }
`