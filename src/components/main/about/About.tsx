import React from "react";
import me from '../../../assets/img/me2.jpg'

export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img
          src={me}
          alt="frontend, design, services, web development, freelance, ui, design"
          className="about__img"
        />
        <div className="about__data">
          <p className="about__description">
            Young man, with knowledge and passion, for web development, always
            striving for deliver quality work.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">04+</span>
              <span className="about__info-name">
                Year <br /> experience
              </span>
            </div>
            <div>
              <span className="about__info-title">10+</span>
              <span className="about__info-name">
                Completed <br /> project
              </span>
            </div>
            <div>
              <span className="about__info-title">03+</span>
              <span className="about__info-name">
                Companies <br /> worked
              </span>
            </div>
          </div>
          <div className="about__buttons">
            <a
              download=""
              href="./pdf/Resume-Juan_Diaz.pdf"
              className="button button--flex"
            >
              Download CV <i className="uil uil-import button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
