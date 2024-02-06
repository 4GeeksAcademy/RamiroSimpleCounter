//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let digito1 = 0
let digito2 = 0
let digito3 = 0
let digito4 = 0
let digito5 = 0
let digito6 = 0

setInterval(function () {
    
    if (digito1 == 10) {
        digito1 = 0
        digito2++
    } else if (digito2 == 10) {
        digito2 = 0
        digito3++
    } else if (digito3 == 10) {
        digito3 = 0
        digito4++
    } else if (digito4 == 10) {
        digito4 = 0
        digito5++
    } else if (digito5 == 10) {
        digito5 = 0
        digito6++
    }
    ReactDOM.render(<Home numero1={digito1} numero2={digito2} numero3={digito3} numero4={digito4} numero5={digito5} numero6={digito6} />, document.querySelector("#app"));
    digito1++

}, 1000)


