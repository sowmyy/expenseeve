import styled from 'styled-components';

export const HomeStyles = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
    ul {
      width: 100%;
      border: 1px solid #ddd;
      padding: 0;
    }
`;

export const ListItemStyles = styled.li`
    display: flex;
    p {
      margin-right: 15%;
      margin-bottom: 0;
      width: 10%;
      padding: 10px;
    }
    :nth-child(even) {
      background-color: #eee;
    }
`;
