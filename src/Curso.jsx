import { Link } from "react-router-dom";
import { curso } from "../src/componentes/curso";
import "./styles.css";

export const Curso = () => {
  return (
    <main>
      {curso.map((item) => (
        <Link to={`/lecciones/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="item__curso">
            <img src={item.imagen.trim()} alt="imagen" className="item--img" />
            <h2 className="item--titulo">{item.titulo}</h2>
            <p className="item--docente">Docente: {item.docente}</p>
          </div>
        </Link>
      ))}
    </main>
  );
};