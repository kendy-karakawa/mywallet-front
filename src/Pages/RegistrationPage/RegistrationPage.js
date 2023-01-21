import Logo from "../../styles/Image/MyWallet.png";
import { Form, ScreenContainer } from "./style";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { REACT_APP_API_URL } from "../../Constants/urls";

export default function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  function createAccont(e) {
    e.preventDefault();
    setDisable(true);
    const info = { email, name, password, repeatPassword };
    const promise = axios
      .post(`${REACT_APP_API_URL}/cadastro`, info)
      .then(() => {
        setDisable(false);
        navigate("/");
      })
      .catch((err)=>{
        alert(err.response.data.message);
        setDisable(false);
      })
      
  }

  return (
    <ScreenContainer>
      <img src={Logo} alt="Logo" />

      <Form onSubmit={createAccont}>
        <input
          type="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={disable}
          data-test="user-name-input"
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={disable}
          data-test="email-input"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={disable}
          data-test="password-input"
        />

        <input
          type="password"
          placeholder="Confirmar a senha"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          required
          disabled={disable}
          data-test="user-image-input"
        />
        <button type="submit" disabled={disable} data-test="signup-btn">
          Cadastrar
        </button>
      </Form>
      <Link to={"/"}>
      <p>Já tem uma conta? Entre agora!</p>
      </Link>
 
    </ScreenContainer>
  );
}
