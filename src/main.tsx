import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import WalletContextProvider from "./pages/WalletConnect";
import { createStandaloneToast } from "@chakra-ui/react";
const { ToastContainer } = createStandaloneToast();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider toastOptions={{ defaultOptions: { position: "top" } }}>
      <WalletContextProvider>
        <App />
      </WalletContextProvider>
      <ToastContainer />
    </ChakraProvider>
  </React.StrictMode>
);
