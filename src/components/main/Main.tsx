import { Home } from "./home/Home";
import { About } from "./about/About";
import "../../assets/styles/styles.css";

export const Main = () => {
  return (
    <main className="main__wrapper">
      {/* Decoraciones sutiles */}
      <div className="main__decor" aria-hidden="true">
        <div className="main__bubble main__bubble--1" />
        <div className="main__bubble main__bubble--2" />
        <div className="main__bubble main__bubble--3" />

        <span className="main__plus main__plus--1" />
        <span className="main__plus main__plus--2" />
        <span className="main__plus main__plus--3" />
        <span className="main__plus main__plus--4" />
      </div>
      {/* HOME */}
      <Home />
      {/* ABOUT */}
      <About />
    </main>
  );
};
