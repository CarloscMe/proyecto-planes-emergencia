import React from "react";

const Examen = ({preguntas}) => {
    return(
        <div>
            {preguntas.map((preg, index) =>(
                <div key={preg.id}>
                    <p>{index + 1}. {preg.pregunta}</p>

                    {(preg.tipo === "VF" || preg.tipo === "OPCION") && (
                        <div>
                            {preg.opciones.map((op, index) => (
                                <label key={index}>
                                    <input type="radio" name={preg.id} value={index}></input>
                                    {op}
                                </label>
                            ))}
                        </div>
                    )}

                    {preg.tipo === "ABIERTA" && (
                        <input type="text" placeholder="Escribe la respuesta correcta"/>
                    )}
                </div>
            ))}
            <button>Enviar</button>
        </div>
    )
}

export default Examen