import styled from "styled-components";

 export const Navwrapper = styled.div`
  position: relative;
  top: -4px;
  display: flex;
  padding-left: 180px;
  height: 30px;
  box-sizing: border-box;

  >.item {
    >a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;
      font-size: 12px;

      &:hover,
      &.active {
        text-decoration: none;
        border-radius: 20px;
        background-color: #9b0909;
      }
    }
  }

 `