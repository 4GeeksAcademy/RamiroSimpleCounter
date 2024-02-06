import React from "react";
import Contador from "./secondsCounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = (props) => {
	return (
		<Contador numero1={props.numero1} numero2={props.numero2} numero3={props.numero3} numero4={props.numero4} numero5={props.numero5} numero6={props.numero6}/>
		);
};

export default Home;
