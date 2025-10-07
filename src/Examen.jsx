import React from "react";
import { useState } from "react";

const Examen = ({preguntas}) => {

    const[respEstudiante, setRespEstudiante] = useState({});
    const[resultadoFinal, setResultadoFinal] = useState(null);

    const opcionSeleccionada = (idPregunta, indiceOpcion) => {
      setRespEstudiante((resp) => ({...resp, [idPregunta]: indiceOpcion}))
    }

    const respEscrita = (idPregunta, escrita) => {
      setRespEstudiante((resp) => ({...resp, [idPregunta]: escrita}))
    }

    const enviarExamen = () => {
      const totalPreguntas = preguntas.length; 
      let contCorrectas = 0; //contador para la cantidad de preguntas correctas 

      preguntas.forEach((preg) => {
        if(preg.tipo==="ABIERTA") {
          const respEst = respEstudiante[preg.id]?.toLowerCase?.() || ""
          if(respEst == preg.respuestaCorrecta.toLowerCase()){
            contCorrectas++
          }
        }else if(respEstudiante[preg.id] === preg.respuestaCorrecta) {
          contCorrectas++
        }
      })
      const aprobado = contCorrectas >=3
      setResultadoFinal({contCorrectas, totalPreguntas, aprobado})
    }
 
    return(
        <div>
            {preguntas.map((preg, index) =>(
                <div key={preg.id}>
                    <p>{index + 1}. {preg.pregunta}</p>

                    {(preg.tipo === "VF" || preg.tipo === "OPCION") && (
                        <div>
                            {preg.opciones.map((op, i) => (
                                <label key={i}>
                                    <input type="radio" name={preg.id} value={i}
                                    checked={respEstudiante[preg.id] === i}
                                    onChange={() => opcionSeleccionada(preg.id, i)}/>
                                    {op}
                                </label>
                            ))}
                        </div>
                    )}

                    {preg.tipo === "ABIERTA" && (
                        <input type="text" placeholder="Escribe la respuesta correcta"
                        value={respEstudiante[preg.id] || ""} 
                        onChange={(evento) => respEscrita(preg.id, evento.target.value)}/>
                    )}
                </div>
            ))}
            <button onClick={enviarExamen}>Enviar</button>

            {resultadoFinal && (
              <p>Calificacion: {resultadoFinal.contCorrectas}/{resultadoFinal.totalPreguntas}
                 {" - "}{resultadoFinal.aprobado ? "Aprobo el examen" : "Reprobo el examen"}</p>
            )}
        </div>
    )
}

export default Examen