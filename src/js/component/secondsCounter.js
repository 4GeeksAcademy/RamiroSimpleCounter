import React from "react";

function Contador (promps) {
    return(
        <div className="text-center bg-black m-5 ">
            <i className="far fa-clock text-white p-3 bg-dark mx-2 my-5 rounded-4" style={{fontSize: '100px'}}></i>
			<span className="text-white p-3 bg-dark m-2 rounded-4" style={{fontSize: '100px'}}>{promps.numero6}</span>
			<span className="text-white p-3 bg-dark m-2 rounded-4" style={{fontSize: '100px'}}>{promps.numero5}</span>
			<span className="text-white p-3 bg-dark m-2 rounded-4" style={{fontSize: '100px'}}>{promps.numero4}</span>
			<span className="text-white p-3 bg-dark m-2 rounded-4" style={{fontSize: '100px'}}>{promps.numero3}</span>
			<span className="text-white p-3 bg-dark m-2 rounded-4" style={{fontSize: '100px'}}>{promps.numero2}</span>
			<span className="text-white p-3 bg-dark m-2 rounded-4" style={{fontSize: '100px'}}>{promps.numero1}</span>			
		</div>
    )
}

export default Contador