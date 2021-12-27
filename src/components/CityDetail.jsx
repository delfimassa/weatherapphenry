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
    <div className={styles.ppal}>
      <button onClick={onBack}>Atrás</button>
      <div>
        {city === undefined && <h2>Cargando...</h2>}
        {city === null && <h2>Ciudad no encontrada</h2>}
        {city && (
          <div>
            <p>Nombre: {city.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CityDetail;
