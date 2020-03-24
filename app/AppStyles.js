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
    .icon svg {
      width: 25px;
      height: 25px;
      path {
        transition: all 0.2s ease-in-out;
        fill: #57241E;
      }
    }
    a.active {
      svg {
        path {
          fill: white;
        }
      }
    }
    .icon svg:hover {
      path {
        fill: white;
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
  overflow-y: scroll;
`;
