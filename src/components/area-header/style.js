import styled from "styled-components";

export const AreaHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 4px 34px;
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  background-position: -225px -156px;

  >.left {
    display: flex;
    align-items: center;

    >.title {
      margin-right: 20px;
      font-size: 20px;
      font-weight: normal;
    }

    >.keywords {
      display: flex;
      align-items: center;

      >.item {
        position: relative;
        top: 2px;
        
        >.link {
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }

        .divider {
          margin: 0 15px;
          color: #ccc;
        }

        &:last-child {
          .divider {
            display: none;
          }
        }
      }
    }
  }

  >.right {
    display: flex;
    align-items: center;
     
    

    >.icon {
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`