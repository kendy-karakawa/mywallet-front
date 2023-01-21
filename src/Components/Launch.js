import styled from "styled-components";

export default function Launch() {
  return (
    <Box>
      <Discriptions>
        <h1>11/05</h1>
        <h2>almoço</h2>
      </Discriptions>
      <Value>
        39,33
      </Value>
    </Box>
  );
}

const Box = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Discriptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #c6c6c6;
  }
  h2 {
    margin-left:5px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
`;

const Value = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: right;

color: #C70000;
`
