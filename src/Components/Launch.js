import styled from "styled-components";

export default function Launch({id,value,description,date,type,total,setTotal}) {

 
  return (
    <Box>
      <Discriptions>
        <h1>{date}</h1>
        <h2>{description}</h2>
      </Discriptions>
      {type === "input" ? <Value cor={"#03AC00"}>{value}</Value> : 
      <Value cor={"#C70000"}>{value}</Value>}
      
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
color: ${(props)=> props.cor};
`
