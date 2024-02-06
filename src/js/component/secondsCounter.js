import React from "react";

function Contador (promps) {
    return(
        <div className="text-center">
            <i className="far fa-clock"></i>
			<span>{promps.numero6}</span>
			<span>{promps.numero5}</span>
			<span>{promps.numero4}</span>
			<span>{promps.numero3}</span>
			<span>{promps.numero2}</span>
			<span>{promps.numero1}</span>			
		</div>
    )
}

export default Contador