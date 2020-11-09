import React from 'react';
import Header from "./components/Header"

import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "./styles/global";

function App(props) {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes />
        </BrowserRouter>
      <GlobalStyles/>
  </>
  )

}

export default App;
