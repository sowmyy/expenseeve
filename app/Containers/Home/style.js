import styled from 'styled-components';

export const ModalForm = styled.form`
  input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  input[type=submit] {
    width: 100%;
    background-color: #EE6352;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  input[type=submit]:hover {
    background-color: #C35244 ;
  }
  div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
`;

export const HomeStyles = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
    ul {
      width: 100%;
      border: 1px solid #ddd;
      padding: 0;
    }
    .container {
      .btn {
        border: 1px solid #ddd;
        background-color: #fff;
        padding: 1em 1.5em;
        border-radius: 5px;
        text-decoration: none;
        i {
          padding-right: 0.3em;
        }
      }
    }
    .modal-window {
      position: fixed;
      background-color: rgba(255, 255, 255, 0.25);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 999;
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s;
      .modal-close {
        color: #aaa;
        line-height: 50px;
        font-size: 80%;
        position: absolute;
        right: 0;
        text-align: center;
        top: 0;
        width: 70px;
        text-decoration: none;
        &:hover {
          color: black;
        }
      }
      .icon {
        div {
          width: 90px;
        }
        svg {
          width: 15px;
          height: 15px;
        }
      }
      &:target {
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
      }
      &>div {
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2em;
        background: #ffffff;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      header {
        font-weight: bold;
      }
      h1 {
        font-size: 150%;
        margin: 0 0 15px;
      }
    }
`;

export const Modal = styled.div`

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
