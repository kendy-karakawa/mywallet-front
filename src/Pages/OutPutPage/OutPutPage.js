import { ScreenContainer, Header, Form } from "./style";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/auth";
import { REACT_APP_API_URL } from "../../Constants/urls";
import {  useNavigate } from "react-router-dom";


export default function OutPutPage(){
  const [disable, setDisable] = useState(false);
  const [value, setValue] = useState(0.00)
  const [description, setDescription] = useState("")
  const { userInfo } = useContext(AuthContext)
  const key = localStorage.getItem("key");
  const navigate = useNavigate();

  const config = {
    headers: { Authorization: `Bearer ${key || userInfo.token}` },
  };


  function sendOutput(e){
    e.preventDefault();
    setDisable(true);

    const info = {value, description}

    axios.post(`${REACT_APP_API_URL}/nova-saida`,info, config)
    .then(()=>{
      setDisable(false)
      navigate("/home")
    })
    .catch((err)=>{ 
      alert(err.response.data) 
      setDisable(false)})
  }




    return (
        <ScreenContainer>
      <Header>
        <p>Nova saida</p>
      </Header>

      <Form onSubmit={sendOutput}>
        <input
          type="number"
          step="0.01"
          min="0.01"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          disabled={disable}
        />
        <input
          type="name"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          disabled={disable}
        />
        <button
          type="submit"
          disabled={disable}
        >
          Salvar saida
        </button>
      </Form>
    </ScreenContainer>
    )
}