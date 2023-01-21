import styled from "styled-components";

export const ScreenContainer = styled.div`
  width: 400px;
  min-width: 400px;
  min-height: 100vh;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    margin-bottom: 25px;
  }
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
    margin-top: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    width: 326px;
    height: 58px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    margin-top: 10px;
  }
  input:disabled {
    width: 326px;
    height: 45px;
    left: 36px;
    top: 279px;
    background: #f2f2f2;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    margin-top: 10px;
  }
  button {
    width: 326px;
    height: 46px;
    background: #a328d6;
    border-radius: 5px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #ffffff;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button:disabled {
    width: 326px;
    height: 45px;
    background: #52b6ff;
    opacity: 0.7;
    border-radius: 5px;
  }
`;
