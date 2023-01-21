import { ScreenContainer, Header, Form } from "./style";

export default function InPutPage() {
  return (
    <ScreenContainer>
      <Header>
        <p>Nova entrada</p>
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
          Salvar entrada
        </button>
      </Form>
    </ScreenContainer>
  );
}
