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
    
    const desabilitar = resultadoFinal !== null //condicion para desabilitar inputs

    return(
        <div  className="examen-container">
            {preguntas.map((preg, index) =>(
                <div key={preg.id} className="pregunta-card">
                    <p className="pregunta-texto">{index + 1}. {preg.pregunta}</p>

                    {(preg.tipo === "VF" || preg.tipo === "OPCION") && (
                        <div className="opciones-container">
                            {preg.opciones.map((op, i) => (
                                <label key={i}  className="opcion-label">
                                    <input type="radio"   className="opcion-input" name={preg.id} value={i}
                                    checked={respEstudiante[preg.id] === i} disabled={desabilitar}
                                    onChange={() => opcionSeleccionada(preg.id, i)}/>
                                    {op}
                                </label>
                            ))}
                            {desabilitar && ( <p className="respuesta-correcta">Respuesta correcta: {" "}{preg.opciones[preg.respuestaCorrecta]}
                            </p>
                            )}
                        </div>
                    )}

                    {preg.tipo === "ABIERTA" && (
                      <div className="respuesta-abierta-container">
                        <input type="text" className="respuesta-input" placeholder="Escribe la respuesta correcta"
                        value={respEstudiante[preg.id] || ""} disabled={desabilitar}
                        onChange={(evento) => respEscrita(preg.id, evento.target.value)}/>
                        {desabilitar && (
                          <p className="respuesta-correcta">Respuesta correcta: {preg.respuestaCorrecta}</p>
                        )}
                        </div>
                    )}
                </div>
            ))}
            <button className="btn-enviar" onClick={enviarExamen} disabled={desabilitar}>Enviar</button>

            {resultadoFinal && (
              <p className={`resultado-final ${resultadoFinal.aprobado ? 'aprobado' : 'reprobado'}`}>Calificacion: {resultadoFinal.contCorrectas}/{resultadoFinal.totalPreguntas}
                 {" - "}{resultadoFinal.aprobado ? "Aprobo el examen" : "Reprobo el examen"}</p>
            )}
        </div>
    )
}

export default Examen