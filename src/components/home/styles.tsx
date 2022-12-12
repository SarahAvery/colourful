import styled from "styled-components";

const HomeStyled = styled.div`
  background: #ffffff;
  min-height: calc(100vh - 40px);
  padding: 15px;

  ul {
    display: flex;
    flex-wrap: wrap;
    /* border: 1px solid black; */
  }

  li {
    width: 33%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    a {
      color: black;
      text-decoration: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      border: solid #525252 1px;
      border-radius: 10px;
      width: 100%;
      margin: 5px;

      &:hover {
        box-shadow: 2px 3px 6px 0px #ccc;
      }
    }

    p {
      width: 100%;
      text-align: center;
      padding-bottom: 5px;
    }

    img {
      width: auto;
      height: 100px;
      padding: 5px;
    }
  }
`;

export default HomeStyled;
