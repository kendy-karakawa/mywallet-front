import Logo from "../../styles/Image/MyWallet.png"
import { Form, ScreenContainer } from "./style"

export default function SignInPage(){
    return (
    <ScreenContainer>
    <img src={Logo} alt="logo"/>
    <Form onSubmit={"dd"}>
    <input
          type="email"
          placeholder="E-mail"
        //   value={"email"}
         // onChange={"(e) => setEmail(e.target.value)"}
          required
          //disabled={"disable"}
          data-test="email-input" 
        />
        <input
          type="password"
          placeholder="senha"
          //value={"password"}
          //onChange={"(e) => setPassword(e.target.value)"}
          required
          //disabled={"disable"}
          data-test="password-input"
        />
        <button type="submit" 
        data-test="login-btn"
       // disabled={"disable"}
        >Entrar 
        </button>
        <p>Primeira vez? Cadastre-se!</p>

    </Form>
    
    </ScreenContainer>


    )
}