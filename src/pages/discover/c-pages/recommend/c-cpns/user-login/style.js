import styled from "styled-components";

export const UserLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 22px;
  height: 126px;
  box-sizing: border-box;
  font-size: 12px;
  background-position: 0 0;

  > .desc {
    line-height: 25px;
    
  }

  > .login {
    margin-top: 10px;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    background-position: 0 -195px;

    &:hover {
      background-position: -110px -195px;
    }
  }
`