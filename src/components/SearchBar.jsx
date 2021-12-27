import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  // acá va tu código, envia  info???
  // Este Componente recibe por props una función onSearch que recibe un parámetro (que será el nombre de la ciudad tomado desde el input pero de momento pueden pasarle uno cualquiera ya que aún no estamos utilizando estados dentro del componente). La función onSearch se debe ejecutar cuando se haga click en el botón Agregar.
  // const handleOnSearch = ()=> props.onSearch(document.getElementById("searchInput").value);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        id="searchInput"
        type="text"
        placeholder="Buscar una ciudad"
        className={styles.input}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      ></input>
      <button type="submit" className={styles.agregar}>
        Buscar
      </button>
    </form>
  );
}
