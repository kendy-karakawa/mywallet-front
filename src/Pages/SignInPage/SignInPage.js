import Logo from "../../styles/Image/MyWallet.png";
import { Form, ScreenContainer } from "./style";
import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { REACT_APP_API_URL } from "../../Constants/urls";
import { AuthContext } from "../../Contexts/auth";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const {setUserInfo} = useContext(AuthContext)
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    setDisable(true);
    const info = { email, password };
    axios
      .post(`${REACT_APP_API_URL}/`, info)
      .then((res) => {
        setDisable(false);
        //console.log(res.data)
        setUserInfo(res.data)
        localStorage.setItem("key", res.data.token)
        localStorage.setItem("name", res.data.name)
        navigate("/home")
      })
      .catch((err) => {
        alert(err.response.data);
        setDisable(false);
      });
  }

  return (
    <ScreenContainer>
      <img src={Logo} alt="logo" />
      <Form onSubmit={login}>
        <input
          type="email"
          placeholder="E-mail"
          alue={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={disable}
          data-test="email-input"
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={disable}
          data-test="password-input"
        />
        <button type="submit" data-test="login-btn" disabled={disable}>
          Entrar
        </button>

        <Link to="/cadastro">
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </Form>
    </ScreenContainer>
  );
}
