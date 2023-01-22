import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Launch from "./Launch";
import { REACT_APP_API_URL } from "../Constants/urls";

export default function Movimentation({userToken,total, setTotal}) {
  const [movimentList, setMovimentList] = useState(undefined);
  const key = localStorage.getItem("key");

  const config = {
    headers: { Authorization: `Bearer ${key || userToken}` },
  };
  


  useEffect(() => {
    axios
      .get(`${REACT_APP_API_URL}/home`, config)
      .then((res) => {
        setMovimentList(res.data);
        console.log(res.data);

        let value = 0

        res.data.map((item) =>{
          if(item.type === "input"){
            return value += Number(item.value)
          } else{
            return value -= Number(item.value)
          }
        } )

        setTotal(value.toFixed(2))

      })
      .catch((err) => console.log(err.message));
  }, []);
  

  return (
    <Box>
      <Content>
        {movimentList !== undefined &&
          movimentList.map((item) => (
            <Launch
              key={item._id}
              id={item._id}
              value={item.value}
              description={item.description}
              date={item.date}
              type={item.type}
              total={total}
              setTotal={setTotal}
            />
          ))}

        {movimentList !== undefined && movimentList.length === 0 && (
          <Coment>
            Não há registros de <br /> entrada ou saída
          </Coment>
        )}
      </Content>
      {movimentList !== undefined && movimentList.length !== 0 && (
        <Total>
          <p>SALDO</p>
          {Number(total) < 0 ? <Balance col={"#C70000"}>{total}</Balance> : <Balance col={"#03AC00"}>{total}</Balance>}
          
        </Total>
      )}
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
  padding: 5px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Total = styled.div`
  width: 300px;
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
  
`;

const Balance = styled.h1`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: right;
    color: ${(props)=>props.col};
`

const Coment = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #868686;
  margin-top:200px;
`;
