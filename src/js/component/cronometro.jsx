import React, { useEffect } from "react";
export default function Cronometro(props) {

    let contador = props.contador
    useEffect(() => {
        if (props.contador % 10 === 0 && props.contador !== 0) {
            alert('Han pasado 3 segundos');
        }
    }, [props.contador]);

    function onReset() {
        let reset = props.contador
    }
    return (
        <div className="lh-lg p-5 bg-dark text-white" style={{ fontSize: "10rem", margin: "auto" }}>
            <div className="bigCounter d-flex justify-content-center">
                <div className="m-5"><i className="fa-regular fa-clock"></i></div>
                <div className="m-5">{props.DigHoras % 10} </div>
                <div className="m-5"> : {props.DigMinutos % 10} </div>
                <div className="m-5"> : {props.DigSegundos % 10}</div>
                <div className="fs-4 d-flex justify-content-center">
                    
            </div>
        </div>

        </div >
    )

}







/*Cronometro.propTypes={
    DigHoras : propTypes.array,
    DigMinutos : propTypes.array,
    DigSegundos : propTypes.array

}*/