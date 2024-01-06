import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AccessContext, AccessProvider } from "./contexts/AccessContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

export { AccessContext };
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <AccessProvider>
          <App />
        </AccessProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
