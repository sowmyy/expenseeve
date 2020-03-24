import styled from 'styled-components';

export const SettingsStyle = styled.div`
  ul {
    list-style: none;
    margin-top: 20px;
    display: flex;
    li {
      font-size: 0.9rem;
      border: 1px solid #aaa;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      margin-right: 20px;
      padding: 7px;
      padding-left: 10px;
      .categoryName {
        margin-right: 10px;
      }
      .icon {
        cursor: pointer;
        svg {
          width: 10px;
          height: 10px;
          path {
            fill: red;
          }
        }
      }
    }
  }
  .heading {
    margin-left: 40px;
    margin-top: 20px;
    font-weight: 500;
  }
`;

export const CategoryAddSection = styled.div`
  margin-left: 40px;
  margin-top: 20px;
  button {
    background: white;
    border: 1px solid #EE6352;
    padding: 3px 10px;
    color: #EE6352;
    transition: all 0.2s ease-in-out;
    margin-left: 20px;
  }
  button:hover {
    background: #EE6352;
    color: white;
  }
`;
