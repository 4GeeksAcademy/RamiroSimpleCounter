import React from "react";

function Contador (promps) {
    return(
        <div className="text-center bg-black">
            <i className="far fa-clock text-white p-3"></i>
			<span className="text-white p-3">{promps.numero6}</span>
			<span className="text-white p-3">{promps.numero5}</span>
			<span className="text-white p-3">{promps.numero4}</span>
			<span className="text-white p-3">{promps.numero3}</span>
			<span className="text-white p-3">{promps.numero2}</span>
			<span className="text-white p-3">{promps.numero1}</span>			
		</div>
    )
}

export default Contador