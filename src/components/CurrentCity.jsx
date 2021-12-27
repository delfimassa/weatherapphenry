import React from "react";
import styles from "../styles/CurrentCity.module.css";
import { NavLink } from "react-router-dom";

export default function CurrentCity(props) {
  // console.log(props);
  //porque llega un obj dentro de otro nose??
  // acá va tu código tomar toda la info d la city: max min name img(es un codigo) onClose
  // Para poder obtener la imagen correspondiente desde la API del clima deben utilizar la siguiente URL http://openweathermap.org/img/wn/${img}@2x.png donde img debería ser el código del icono asociado a la imagen que recibe como prop.
  if (typeof props.currentCity === "object") {
    return (
      <div className={styles.caja}>
        <div className={styles.titulo}>
        <NavLink to={`/city/${props.currentCity.id}`} activeClassName="active" className="currentLink">
            <h2>{props.currentCity.name}</h2>
        </NavLink>
          <p>{props.currentCity.weather}</p>
          <p>{props.currentCity.temp}°</p>
          <img
            src={`http://openweathermap.org/img/wn/${props.currentCity.img}@2x.png`}
            alt="imagen del clima"
          ></img>
        </div>
        <div className={styles.contenedor}>
          <p>Min: {props.currentCity.min}°</p>
          <p>Max: {props.currentCity.max}°</p>
          <p>Feels like: {props.currentCity.feels}</p>
          <p>Humidity: {props.currentCity.humidity}</p>
          <p>Windspeed: {props.currentCity.wind}</p>
        </div>
      </div>
    );
  } else {
    return null;
    //aca seria piolisima usar bom y traer la location de la persona y mostrarle esooo o oo
  }
}
