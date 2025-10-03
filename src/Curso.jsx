import { useState } from "react";
import { curso } from "../src/componentes/curso"
import "./styles.css"

export const Curso = () => {

 const [info, setInfo] = useState(curso);
  return (
   <main>
    {
      info.map((item)=>(  
         <div key={item.id} className="item__curso">
         <img src={item.imagen} alt="imagen" className="item--img"/>
         <h2 className="item--titulo">{item.titulo}</h2>
         <p className="item--docente"> Docente: {item.docente}</p>
         </div> 
   ))}
   </main>
  )
}
