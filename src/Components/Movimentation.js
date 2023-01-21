import styled from "styled-components";
import Launch from "./Launch";

export default function Movimentation() {
  return (
    <Box>
      <Content>
        <Launch/>
        <Launch/>
        <Launch/>
        <Launch/>
      </Content>

      <Total>
        <p>SALDO</p>
        <h1>5555,22</h1>
      </Total>
    </Box>
  );
}

const Box = styled.div`
  width: 326px;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding:5px;
  
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Total = styled.div`
  width:300px;
  display: flex;

  justify-content: space-between;
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
  }
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: right;
    color: #03ac00;
  }
`;
