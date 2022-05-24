import React, { useState, useEffect } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import "./styles.css"
import axios from "axios";
import AlertDanger from "../Alert/alertDanger";

function Weather() {
  const [location, setLocation] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

 if(location === false){
   return(
     <>
     <AlertDanger/>
     </>

   )} else{
 return ( 
    
    <div className="container">
    <h1>Weather</h1>
    <Card classname="cardInitial">
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>
          <h3> Clima nas suas Coodernadas: (Exemplo)</h3>
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Temperatura atual: x °</ListGroupItem>
        <ListGroupItem>Temperatura máxima: x °</ListGroupItem>
        <ListGroupItem>Temperatura minima: x°</ListGroupItem>
        <ListGroupItem>Pressão: hpa</ListGroupItem>
        <ListGroupItem>Umidade</ListGroupItem>
      </ListGroup>
    </Card>
  </div>
  );


  }
 }
   

export default Weather;
