import styled from "styled-components";

export const NavBar = styled.ul`
  list-style: none;
  margin: 0;
  height: 100%;
  background-color: #EE6352;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  li {
    padding-top: 15px;
    padding-bottom: 15px;
    text-transform: uppercase;
    a {
      color: #57241E;
      :hover {
        color: blue;
      }
      &.active {
        color: white;
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
  width: 5%;
  text-align: center;
  nav {
    height: 100%;
  }
`;
export const RenderSection = styled.div`
  width: 100%;
`;
