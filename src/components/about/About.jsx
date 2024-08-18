import React from "react";
import withr from "../../assests/for real/with.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={withr} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6+ years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Client</h5>
              <small>100+ Clients Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>40+ Project</small>
            </article>
          </div>
          <p>
            Hi, I'm Ademola Adepoju, a frontend developer and branding agent
            with a passion for creating beautiful and effective digital
            experiences. With 6+ years of experience in web development, I've
            honed my skills in typeScript, React, Next.Js Vue.js, Nuxt, SCSS,
            Tailwind, Vue Test Utils, Vite, Git, and more.nd other web
            technologies to deliver responsive, user-friendly websites that
            reflect the unique brand identity of my clients. As a branding
            agent, I also help businesses establish a strong visual identity,
            from logos and color schemes to typography and overall design
            aesthetics. Whether you need a new website, a brand refresh, or
            both, I'm here to help you make a lasting impact online.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
