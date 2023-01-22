import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/auth";
import { ScreenContainer, Header, Form } from "./style";
import { REACT_APP_API_URL } from "../../Constants/urls";
import {  useNavigate } from "react-router-dom";


export default function InPutPage() {
  const [disable, setDisable] = useState(false);
  const [value, setValue] = useState("")
  const [description, setDescription] = useState("")
  const { userInfo } = useContext(AuthContext)
  const key = localStorage.getItem("key");
  const navigate = useNavigate();

  const config = {
    headers: { Authorization: `Bearer ${key || userInfo.token}` },
  };


  function sendInput(e){
    e.preventDefault();
    setDisable(true);

    const info = {value, description}

    axios.post(`${REACT_APP_API_URL}/nova-entrada`,info, config)
    .then(()=>{
      setDisable(false)
      navigate("/home")
    })
    .catch((err)=> { 
      alert(err.response.data) 
      setDisable(false)})
  }



  return (
    <ScreenContainer>
      <Header>
        <p>Nova entrada</p>
      </Header>

      <Form onSubmit={sendInput}>
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
          Salvar entrada
        </button>
      </Form>
    </ScreenContainer>
  );
}
