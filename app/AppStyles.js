import styled from "styled-components";

export const NavBar = styled.ul`
  list-style: none;
  margin: 0;
  height: 100%;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  li {
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #aaa;
    a {
      color: black;
      :hover {
        color: blue;
      }
      &.active {
        color: blue;
      }
    }
    &.logOut {
      align-content: flex-end;
    }
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const NavComponentStyle = styled.div`
  width: 10%;
  text-align: center;
  nav {
    height: 100%;
  }
`;
export const RenderSection = styled.div`
  width: 70%;
`;
