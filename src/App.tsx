import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <Header />
      {/* MAIN */}
      <Main />
    </div>
  );
}

export default App;
