const apiKey =  "4ae2636d8dfbdc3044bede63951a019b";
export default function fetchById(id, setCity) {
    fetch(
      `api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          console.log("llego al fetch by id");
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
          setCity(city);
        } else {
          // setCity(null);
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
