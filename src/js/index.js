//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";
import Cronometro from "./component/cronometro.jsx";


let intervalId =  setInterval(contador, 1);

let contador = 0
let resetId = resetInterval



function resetInterval() {
    // Detiene el intervalo si ya está en ejecución
    clearInterval(intervalId);

    // Lógica de reinicio, si es necesario
    console.log('Reiniciando el intervalo...');


}

setInterval(() => {
    let horas = Math.floor(contador / 100);
    let minutos = Math.floor(contador / 10);
    let segundos = Math.floor(contador / 1);
    console.log(horas, minutos, segundos)
    contador++
    ReactDOM.render(
        <Cronometro contador={contador} DigSegundos={segundos} DigMinutos={minutos} DigHoras={horas} Reset={resetId} />, document.querySelector("#app"));
}, 1000)




//render your react application

