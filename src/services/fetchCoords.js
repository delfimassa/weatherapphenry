const apiKey =  "4ae2636d8dfbdc3044bede63951a019b";
export default function fetchCoords(lat, lon, setCurrentCity) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
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
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCurrentCity(city);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }


  // useEffect(() => {
  //   if (navigator.geolocation)
  //     navigator.geolocation.getCurrentPosition((pos) => {
  //       fetchCoords(pos.coords.latitude, pos.coords.longitude, setCurrentCity);
  //     });
  // }, []);

  // import fetchCoords from "./services/fetchCoords.js"
