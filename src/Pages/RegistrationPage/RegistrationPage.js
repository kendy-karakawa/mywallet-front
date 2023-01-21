import Logo from "../../styles/Image/MyWallet.png";
import { Form, ScreenContainer } from "./style";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import dotenv from "dotenv";
dotenv.config();

export default function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <img src={Logo} alt="Logo" />

      <Form onSubmit={""}>
        <input
          type="name"
          placeholder="Nome"
          //value={name}
          //onChange={(e) => setName(e.target.value)}
          required
          //disabled={disable}
          data-test="user-name-input"
        />
        <input
          type="email"
          placeholder="E-mail"
          //value={email}
          //onChange={(e) => setEmail(e.target.value)}
          required
          //disabled={disable}
          data-test="email-input"
        />
        <input
          type="password"
          placeholder="Senha"
          //value={password}
          //onChange={(e) => setPassword(e.target.value)}
          required
          //disabled={disable}
          data-test="password-input"
        />

        <input
          type="password"
          placeholder="Confirmar a senha"
          //value={image}
          //onChange={(e) => setImage(e.target.value)}
          required
          //disabled={disable}
          data-test="user-image-input"
        />
        <button
          type="submit"
          //disabled={disable}
          data-test="signup-btn"
        >
          Cadastrar
        </button>
      </Form>

      <p>Já tem uma conta? Entre agora!</p>
    </ScreenContainer>
  );
}
