import styled from 'styled-components';

export const ExpenseCard = styled.div`
  width: 30%;
  background: #efefef;
  border-radius: 5px;
  margin-bottom: 10px;
  .circle-wrap {
    margin: 50px auto;
    width: 150px;
    height: 150px;
    background: #e6e2e7;
    border-radius: 50%;
  }

  .circle-wrap .circle .mask,
  .circle-wrap .circle .fill {
    width: 150px;
    height: 150px;
    position: absolute;
    border-radius: 50%;
  }

  .circle-wrap .circle .mask {
    clip: rect(0px, 150px, 150px, 75px);
  }

  .circle-wrap .circle .mask .fill {
    clip: rect(0px, 75px, 150px, 0px);
    background-color: #EE6352;
  }

  .circle-wrap .circle .mask.full,
  .circle-wrap .circle .fill {
    animation: fill ease-in-out 1s;
    transform: rotate(${(props) => props.circleProgress}deg);
  }

  @keyframes fill {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(${(props) => props.circleProgress}deg);
    }
  }

  .circle-wrap .inside-circle {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: #fff;
    line-height: 130px;
    text-align: center;
    margin-top: 10px;
    margin-left: 10px;
    position: absolute;
    z-index: 100;
    font-weight: 700;
    font-size: 2em;
  }
`;

export const ModalForm = styled.form`
  input[type=date], input[type=text], select {
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
    background-color: #C35244;
  }
  div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
`;

export const HomeStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 0px;
    padding: 30px;
    ul {
      width: 95%;
      border: 1px solid #ddd;
      padding: 0;
    }
    .container {
      padding-left: 0;
      margin-bottom: 15px;
      .btn {
        border: 1px solid #ddd;
        font-weight: bold;
        text-transform: uppercase;
        color: white;
        background-color: #EE6352;
        margin-top: 5px;
        padding: 0.6em 1.2em;
        border-radius: 5px;
        text-decoration: none;
        i {
          padding-right: 0.3em;
        }
        &:hover {
          background-color: #C35244;
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
      transition: all 0.3s;
      .modal-close {
        cursor: pointer;
        color: #aaa;
        line-height: 50px;
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

export const ListItemStyles = styled.li`
    ${(props) => props.heading && 'background-color: #EE6352'};
    ${(props) => props.heading && 'color: white'};
    ${(props) => props.heading && 'font-weight: bold'};
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
