import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import styles from "../styles/CityDetail.module.css";
import fetchById from "../services/fetchById";
import styles from "../styles/CityDetail.module.css";

const CityDetail = ({ id, onBack }) => {
  const params = useParams();
  const [city, setCity] = useState({});
  useEffect(() => {
    fetchById(params.id, setCity);
  }, [params.id, setCity]);
  return (
    <div>
      <div className={styles.boton}>
        <button onClick={onBack}>
          <h5>Atrás</h5>
        </button>
      </div>
      <div className={styles.ppal}>
        <div className={styles.caja}>
          {city === undefined && <h2>Cargando...</h2>}
          {city === null && <h2>Ciudad no encontrada</h2>}
          {city && (
            <div className={styles.parent}>

              <div className={styles.mainInfo}>
                {/* <div className={styles.nameAndImage}> */}
                  <h1>{city.name}</h1>
                  <img
                    src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
                    alt="imagen del clima"
                  ></img>
                {/* </div> */}
                <div  className={styles.weatherAndTemp}>
                  <h4>{city.weather}</h4>
                  <h4>{city.temp}°</h4>
                </div>
              </div>

              <div className={styles.secondaryInfo}>
                <h5>Min: {city.min}°</h5>
                <h5>Max: {city.max}°</h5>
                <h5>Feels like: {city.feels}</h5>
                <h5>Humidity: {city.humidity}</h5>
                <h5>Windspeed: {city.wind}</h5>
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CityDetail;
