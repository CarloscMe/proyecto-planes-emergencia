import { useStateLogin } from "./componentes/login"; //hook personalizado de login
import FormularioLogin from "./FormularioLogin";
import { Curso} from "./Curso"
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  //usuario y contraseña del test
  const superUsuario = 'test';
  const superContrasenia = '1234';

  const {usuario, setUsuario, contrasenia, setContrasenia, usuarioLogeado, 
    Logear, CerrarSesion} = useStateLogin(superUsuario, superContrasenia);

  const navigate = useNavigate();

  useEffect(() => {
    if (usuarioLogeado) {
      navigate("/curso", { replace: true });
    }
  }, [usuarioLogeado, navigate]);

  return (
    <>

    <Routes>
      <Route path="/login" element={usuarioLogeado ? <Navigate to="/curso" replace /> : <FormularioLogin usuario={usuario} setUsuario={setUsuario} contrasenia={contrasenia} setContrasenia={setContrasenia} Logear={Logear} />} />
      <Route path="/curso" element={usuarioLogeado ? (<><h2>Gusto en verte de nuevo, {usuarioLogeado}</h2><button onClick={CerrarSesion}>Cerrar Sesión</button><Curso /></>) : <Navigate to="/login" replace />} />
      <Route path="/" element={usuarioLogeado ? <Navigate to="/curso" replace /> : <Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>

  </>

  );
}

export default App;
