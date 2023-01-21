import React from "react";
import ReactDom from "react-dom/client"
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <GlobalStyle/>
        <App/>
    </React.StrictMode>
)