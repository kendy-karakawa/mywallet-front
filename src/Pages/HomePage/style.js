import styled from "styled-components";

export const ScreenContainer = styled.div`
  width: 400px;
  min-width: 400px;
  min-height: 100vh;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  width: 400px;
  min-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }
`;

export const Footer = styled.footer`
  width: 400px;
  min-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  div {
    width: 155px;
    height: 114px;
    background: #a328d6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px;
  }
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
  }
  ion-icon{
    font-size: 25px;
    color:#ffffff;
  }
`;
