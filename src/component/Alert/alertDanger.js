import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import "./styles.css";
export default function AlertDanger() {
  return (
    <div classname="container">
      <Alert severity="warning">
        <AlertTitle>Atenção</AlertTitle>
        Você precisa permitir sua localização —{" "}
        <strong>check o browser!</strong>
      </Alert>
    </div>
  );
}
