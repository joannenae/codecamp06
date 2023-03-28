import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 20px;
    /* font-family: "myfont"; */
  }

  @font-face {
    font-family: "myfont";
    src: url("/font/scifibit.ttf");
  }
  .item {
    align-items: center;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    height: 40px;
    justify-content: center;
    width: 40px;
  }

  .disabled-page {
    color: #808e9b;
  }

  .active {
    border: solid 1px #808e9b;
    border-radius: 40px;
    color: #808e9b;
  }

  .break-me {
  }

  .next {
    font-size: 4px;
    height: 60px;
    position: absolute;
    right: 0;
    width: 150px;
  }

  .pagination {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 60px;
    justify-content: center;
    list-style-type: none;
    position: relative;
    width: 800px;
    margin: 0 auto;
  }

  .pagination-page {
    font-weight: 700;
  }

  .previous {
    font-size: 4px;
    height: 60px;
    left: 0;
    position: absolute;
    width: 150px;
  }
`;
