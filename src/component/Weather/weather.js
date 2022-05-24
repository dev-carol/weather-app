import React, { useState, useEffect } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import AlertDanger from "../Alert/alertDanger";
import "./styles.css";
import axios from "axios";

function Weather() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  let getWeather = async (lat, long) => {
    let res = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: long,
          appId: process.env.REACT_APP_OPEN_WHEATHER_KEY,
          lang: "pt",
          units: "metric",
        },
      }
    );
    setWeather(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  if (location === false) {
    return (
      <>
        <AlertDanger />
      </>
    );
  } else if (weather === false) {
    return <>Carregando o clima...</>;
  } else {
    return (
      <div className="container">
        <Card className="weatherCard">
          <Card.Body>
          <h2>Weather</h2>
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <div className="infoPrincipal">
            <h3 className="location"> Local: {weather["name"]} </h3>
              {dateBuilder(new Date())}
              <p className="today"> Hoje o dia está: <strong className="description">{weather["weather"][0]["description"]} </strong></p>
            </div>
          </Card.Body>

          <div className="temps">
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Temperatura atual: <span>{weather["main"]["temp"]}°c</span>
              </ListGroupItem>
              <ListGroupItem>
                Temperatura máxima: <span> {weather["main"]["temp_max"]}°c</span>
              </ListGroupItem>
              <ListGroupItem>
                Temperatura minima: <span>{weather["main"]["temp_min"]}°c </span>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Card>
      </div>
    );
  }
}

export default Weather;
