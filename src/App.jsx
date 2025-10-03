import { useStateLogin } from "./componentes/login"; //hook personalizado de login
import FormularioLogin from "./FormularioLogin";

function App() {
  //usuario y contraseña del test
  const superUsuario = 'test';
  const superContrasenia = '1234';

  const {usuario, setUsuario, contrasenia, setContrasenia, usuarioLogeado, 
    Logear, CerrarSesion} = useStateLogin(superUsuario, superContrasenia);

  return (
    <>
    {usuarioLogeado !== null ?( //mostramos el mensaje si hay un usuario logeado
    <div>
      <h2>Gusto en verte de nuevo, {usuarioLogeado}</h2>
      <button onClick={CerrarSesion}>Cerrar Sesion</button>
    </div>
    ) : (<FormularioLogin usuario={usuario} setUsuario={setUsuario} // de lo contrario seguira mostrando el formulario
      contrasenia={contrasenia} setContrasenia={setContrasenia} 
      Logear={Logear} />
    )}
    </>
  );
}

export default App;
