import styled from "styled-components";

export const RecommendWrapper = styled.div`
  >.content {
    display: flex;
    box-sizing: border-box;
    border: 1px solid #d3d3d3;
    background-image: url(${require('@/assets/img/wrap-bg.png')});

    >.left {
      padding: 20px;
      width: 689px;

    }

    >.right {
      margin-left: 1px;
      width: 250px;
    }
  }

`