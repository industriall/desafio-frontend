import React from "react";

import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/global";
import { Paths } from "./routes";
export function App() {
  return (
    <>
      <Paths />
      <ToastContainer autoClose={3000} />

      <GlobalStyle />
    </>
  );
}
