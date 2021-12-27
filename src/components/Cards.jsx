import React from "react";
import Card from "./Card";
import styles from "../styles/Cards.module.css";

export default function Cards({ cities, onClose}) {
  return (
    <div className={styles.cards}>
      {cities.map((city) => {
        return (
          <Card
            id={city.id}
            key={city.id}
            name={city.name}
            temp={city.temp}
            weather={city.weather}
            img={city.img}
            onClose={() => onClose(city.id)} //????para no ejecutarla ahi mismo
          />
        );
      })}
    </div>
  );
  // }
}

// el app me esta mandando cities={data} como props, data es un archivo importado en donde hay un  arreglo de objetos/ciudades llamado cities
// tambien pordria destructurar props asi y aya no tengo que hacer prop. bla bla
// export default function Cards({cities}) {
// Básicamente, este componente va a recibir un arreglo de ciudades (con todos sus datos), y va a crear un componente Card por cada ciudad con un map, pasandole las props correspondientes.
// veamos que trae cada city:
// console.log(props);
// props es un objeto con una prop cities que tiene el arrary, vamos viendo como acceder su info
// console.log(props.cities);
// console.log(props.cities[0]);
// console.log(props.cities[0].name);
