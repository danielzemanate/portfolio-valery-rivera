import React from "react";
import me from "../../../assets/img/me2.jpg";

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
            Web developer with over 4 years of experience, involved in the
            design, development, and testing of multiple web applications. I
            consider myself a technology and learning enthusiast; there have
            never been excuses to learn something new.
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
              href="https://drive.google.com/file/d/1fvNWgIhBhjkgBxVepT3xvYm26SscrTSr/view?usp=drive_link"
              className="button button--flex"
              target="blank"
            >
              Download CV <i className="fas fa-download button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
