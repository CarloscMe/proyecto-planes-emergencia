import React from "react";
import Examen from "./Examen";

const SeleccionarExamen = ({examenes, seleccionada, indiceSeleccionado, cambioLeccion}) =>{
    return(
        <div>
            
            <h2>Preguntas del curso</h2>

            <label>Selecciona el examen de la:
            <select value={indiceSeleccionado} onChange={cambioLeccion}>
                {examenes.map((l, index) =>(
                    <option key={l.leccion} value={index}>{l.leccion}</option>
                ))} 
            </select>
            </label>
            <Examen preguntas={seleccionada.preguntas}/>
            
        </div>
    )
}

export default SeleccionarExamen;