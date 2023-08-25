import React from "react";
import me from "../../../assets/img/me3.jpg";

export const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/juan-daniel-diaz181997/?locale=en_US"
              target="_blank"
              className="home__social-icon"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>

            <a
              href="https://www.instagram.com/juandaniel.pa/"
              target="_blank"
              className="home__social-icon"
            >
              <i className="uil uil-instagram"></i>
            </a>

            <a
              href="https://github.com/juandaniel-pa"
              target="_blank"
              className="home__social-icon"
            >
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
          <div className="home__img">
            <img
              src={me} // Ajusta la ruta de la imagen según tu estructura de carpetas
              alt="Huevo al revés"
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
              I have experience in web design and development knowledge,
              producing quality work.
            </p>
            <a href="#contact" className="button button--flex">
              Contact me <i className="uil uil-telegram-alt button__icon"></i>
            </a>
          </div>
        </div>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
