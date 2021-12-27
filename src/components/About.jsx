import React from "react";
import styles from "../styles/About.module.css";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <NavLink to="/" className="links">
        <div className={styles.boton}>
          <button>
            <h5>Inicio</h5>
          </button>
        </div>
      </NavLink>
      <div className={styles.container}>
        <h1 className="titulo display-4">About</h1>
        <div className={styles.espacio}>
          {/* <h2>
            Esta es una practica del bootcamp full-stack de{" "}
            <span>#SoyHenry</span>. Para el desarrollo de esta app pusimos en
            practica conocimientos sobre React, sus estados y hooks, consumo de
            apis, ruteo, y estilos modulares.
          </h2> */}
          <h2 className={styles.noxs}>
            This is a practice proyect for the Full Stack Developement Bootcamp at{" "}
            <span>#SoyHenry</span>. We worked on our knowledge about React, react states and hooks,
            api consuming, routing, and modularized stylesheets.
          </h2>
          <h5 className={styles.noxl}>
            This is a practice proyect for the Full Stack Developement Bootcamp at{" "}
            <span>#SoyHenry</span>. We worked on our knowledge about React, react states and hooks,
            api consuming, routing, and modularized stylesheets.
          </h5>
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${styles.noxs} ${styles.links}`}>API: openweathermap.org</h2>
            <h5  className={`${styles.noxl} ${styles.links}`}>API: openweathermap.org</h5>
          </a>
          {/* <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="links">Repo: </h2>
          </a> */}
          <br />
          <br />
          <br />
          <a
            href="https://www.linkedin.com/in/delfinamassa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={`${styles.noxs} text-center`}>
              Hecho con ♥ por Delfi Massa
              <br /> <FaLinkedin />
            </h3>
            <h4 className={`${styles.noxl} text-center`}>
              Hecho con ♥ por Delfi Massa
              <br /> <FaLinkedin />
            </h4>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
