import React from "react";
import { Home } from "./home/Home";
import { About } from "./about/About";
import  '../../assets/styles/styles.css';

export const Main = () => {
  return (
    <>
      {/* HOME */}
      <Home />
      {/* BOUT */}
      <About />
    </>
  );
};
