import React from "react";
import me from "../../../assets/img/me3.jpg";

export const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/andersondanielzemanate/"
              target="blank"
              className="home__social-icon"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>

            <a
              href="https://www.instagram.com/danielzemanate/"
              target="blank"
              className="home__social-icon"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>

            <a
              href="https://github.com/danielzemanate"
              target="blank"
              className="home__social-icon"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
          </div>
          <div className="home__img">
            <img
              src={me} // Ajusta la ruta de la imagen según tu estructura de carpetas
              alt="daniel"
              className="egg_image"
              style={{
                borderRadius: "50% / 40% 40% 65% 65%",
                objectFit: "cover", // Esto asegura que la imagen cubra todo el espacio del óvalo
                width: "230px", // Ajusta el ancho según tus necesidades
                height: "300px", // Ajusta la altura según tus necesidades
              }}
            />
          </div>
          <div className="home__data">
            <h1 className="home__title">Hi, I'm Daniel Zemanate</h1>
            <h3 className="home__subtitle">Full Stack Developer</h3>
            <p className="home__description">
              I have experience in web design, REST API, and cloud services,
              producing high-quality work.
            </p>
            <a href="#contact" className="button button--flex">
              Contact me <i className="button__icon far fa-paper-plane"></i>
            </a>
          </div>
        </div>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="fas fa-mouse fa-xs home__scroll-mouse"></i>
            <span
              className="home__scroll-name"
              style={{ marginLeft: 5, fontSize: 17 }}
            >
              Scroll down
            </span>
            <i className="fas fa-arrow-down fa-xs home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
