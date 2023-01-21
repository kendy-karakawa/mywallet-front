import styled from "styled-components";
import HomePage from "./Pages/HomePage/HomePage";
import InPutPage from "./Pages/InPutPage/InPutPage";
import OutPutPage from "./Pages/OutPutPage/OutPutPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./Contexts/auth";


export default function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/cadastro" element={<RegistrationPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/nova-entrada" element={<InPutPage />} />
          <Route path="/nova-saida" element={<OutPutPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
    </AuthProvider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #e5e5e5;
`;
