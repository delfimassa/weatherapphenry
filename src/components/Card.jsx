import React from "react";
import { IoIosClose } from 'react-icons/io';
import styles from "../styles/Card.module.css";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  // acá va tu código tomar toda la info d la city: max min name img(es un codigo) onClose
  // Para poder obtener la imagen correspondiente desde la API del clima deben utilizar la siguiente URL http://openweathermap.org/img/wn/${img}@2x.png donde img debería ser el código del icono asociado a la imagen que recibe como prop.
  return (
    <div className={styles.caja}>
      <div className={styles.titulo}>
        <NavLink to={`/city/${props.id}`} activeClassName="active" className="links">
        <h2>{props.name}</h2>
        </NavLink>
        <button onClick={props.onClose} className={styles.boton}>
          <IoIosClose/>
        </button>
      </div>
      <div className={styles.contenedor}>
        <p>{props.weather}</p>
        <p>{props.temp}°</p>
        <img
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt="imagen del clima"
        ></img>
      </div>
    </div>
  );
}
