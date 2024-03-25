import styled from "styled-components";

export const TopRankingWrapper = styled.div`
  margin-top: 20px;

  > .content {
    display: flex;
    margin-top: 20px;
    height: 472px;
    background-image: url(${require('@/assets/img/recommend-top-bg.png')});
  }
`