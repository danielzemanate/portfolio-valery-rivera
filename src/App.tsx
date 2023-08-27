import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Skills } from "./components/skills/Skills";
import { Qualification } from "./components/qualification/Qualification";
import { Footer } from "./components/footer/Footer";
import { Contact } from "./components/contact/Contact";
import { FloatingWhatsAppButton } from "./components/buttons/whatsapp/FloatingWhatsAppButton";
import { ScrollUpButton } from "./components/buttons/scrollTopButton/ScrollUpButton";

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <Header />
      {/* MAIN */}
      <Main />
      {/* SKILLS */}
      <Skills />
      {/* QUALIFICATION */}
      <Qualification />
      {/* CONTACT */}
      <Contact />
      {/* FOOTER */}
      <Footer />
      {/* FLOAT BUTTON WHATSAPP */}
      <FloatingWhatsAppButton />
      {/* SCROLL UP BUTTON */}
      <ScrollUpButton />
    </div>
  );
}

export default App;
