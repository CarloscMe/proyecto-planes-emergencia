import { Link } from "react-router-dom";
import { curso } from "../src/componentes/curso";

export const Curso = () => {
  return (
    <main className="curso">
      {curso.map((item) => (
        <Link to={`/lecciones/${item.id}`} key={item.id} className="item__curso">
            <img src={item.imagen.trim()} alt="imagen" className="item--img" />
            <h2 className="item--titulo">{item.titulo}</h2>
            <p className="item--docente">Docente: {item.docente}</p>
        </Link>
      ))}
    </main>
  );
};