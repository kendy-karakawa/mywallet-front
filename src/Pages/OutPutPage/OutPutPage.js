import { ScreenContainer, Header, Form } from "./style";

export default function OutPutPage(){
    return (
        <ScreenContainer>
      <Header>
        <p>Nova saida</p>
      </Header>

      <Form onSubmit={"dd"}>
        <input
          type="number"
          step="0.01"
          min="0.01"
          placeholder="Valor"
          //   value={"email"}
          // onChange={"(e) => setEmail(e.target.value)"}
          required
          //disabled={"disable"}
        />
        <input
          type="name"
          placeholder="Descrição"
          //value={"password"}
          //onChange={"(e) => setPassword(e.target.value)"}
          required
          //disabled={"disable"}
        />
        <button
          type="submit"

          // disabled={"disable"}
        >
          Salvar saida
        </button>
      </Form>
    </ScreenContainer>
    )
}