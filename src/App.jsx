import { useStateLogin } from "./componentes/login";
import FormularioLogin from "./FormularioLogin";
import { Curso } from "./Curso";
import { Lecciones } from "./Lecciones";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { examenes } from "./componentes/examen";
import Examen from "./Examen";

function App() {
  const superUsuario = 'test';
  const superContrasenia = '1234';

  const { usuarioLogeado, usuario, setUsuario, contrasenia, setContrasenia, Logear, CerrarSesion } = useStateLogin(superUsuario, superContrasenia);

  const ExamenLeccion = () => {
    const { id } = useParams();
    const leccionId = parseInt(id, 10);
    const examen = examenes[leccionId - 1]; 

    if (!examen || isNaN(leccionId) || leccionId < 1 || leccionId > examenes.length) {
      return <div><h2>Examen no encontrado</h2></div>;
    }

    return (
      <>
        <h2>Examen - Lección {leccionId}</h2>
        <Examen preguntas={examen.preguntas} />
      </>
    );
  };

  return (
 <Routes>
  <Route path="/login" element={usuarioLogeado ? <Navigate to="/curso" replace /> : <FormularioLogin usuario={usuario} setUsuario={setUsuario} contrasenia={contrasenia} setContrasenia={setContrasenia} Logear={Logear} />} />
  <Route path="/curso" element={usuarioLogeado ? (<><nav className="nav__bar"><h2>Gusto en verte de nuevo, {usuarioLogeado}</h2><button onClick={CerrarSesion}>Cerrar Sesión</button></nav><Curso /></>) : <Navigate to="/login" replace />} />
  <Route path="/lecciones/:id" element={usuarioLogeado ? <Lecciones /> : <Navigate to="/login" replace />} />
  <Route path="/examen/:id" element={usuarioLogeado ? <ExamenLeccion /> : <Navigate to="/login" replace />} />
  <Route path="/" element={<Navigate to={usuarioLogeado ? "/curso" : "/login"} replace />} />
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
  );
}

export default App;