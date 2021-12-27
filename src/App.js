import React, { useState, useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Cards from "./components/Cards.jsx";
import CurrentCity from "./components/CurrentCity.jsx";
import fetchCoords from "./services/fetchCoords.js";
import { Route } from "react-router-dom";
import About from "./components/About"
import CityDetail from "./components/CityDetail"

// require('dotenv').config();
// const {apiKey} = process.env;
// en .env poner apiKey=4ae2636d8dfbdc3044bede63951a019b

function App() {
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState("");

  function onSearch(city) {
    if (cities.length > 8) {
      alert("Ups, no hay espacio, por favor elimina una ciudad");
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
        .then((r) => r.json())
        .then((recurso) => {
          if (recurso.main !== undefined) {
            console.log(recurso);
            const city = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              feels: recurso.main.feels_like,
              humidity: recurso.main.humidity,
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
            };

            setCities((oldCities) => oldCities.filter((c) => c.id !== city.id));
            // si habia algo en current, ahora lo paso a cities
            let currentAnterior = currentCity;
            if (city.id === currentAnterior.id) {
              console.log("no pasar el current a cities");
            } else {
              setCurrentCity(city);
              if (typeof currentCity === "object") {
                console.log("entro al if");
                setCities((oldCities) => [currentCity, ...oldCities]);
              }
            }
          } else {
            alert("Ciudad no encontrada");
          }
        });
    }
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
    // se pregunta, este elemento.id es = al id del que clickee x? si no, agregalo al nuevo arreglo, si si, no lo agregues y por lo tanto queda eliminado
  }

  useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((pos) => {
        fetchCoords(pos.coords.latitude, pos.coords.longitude, setCurrentCity);
      });
  }, []);

  return (
    <div className="App">
      <Route exact path="/">
        <div className="arriba">
          <Banner onSearch={onSearch} onClose={onClose} />
          <CurrentCity
            currentId={currentCity.id}
            currentCity={currentCity}
            onClose={onClose}
          />
        </div>
        <div className="ppal">
          <Cards cities={cities} onClose={onClose} />
        </div>
      </Route>
      <Route exact path="/about" component={About} />
      
      <Route path="/city/:id" 
        // render={({match, history})=>{
        // const id = parseInt(match.params.id);
        // return <CityDetail id={id} onBack={history.goBack}/>}}
        render={({match, history})=> <CityDetail id={match.params.id} onBack={history.goBack}/> }/>
    </div>
  );
}

export default App;
