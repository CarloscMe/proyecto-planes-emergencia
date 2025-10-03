import { useState, useEffect} from "react";

export const useStateLogin = (superUsuario, superContrasenia) =>{
    const [usuario, setUsuario] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [usuarioLogeado, setUsuarioLogeado] = useState(null);//inicializado en null ya que no hay un usuario aun

    useEffect(() => {
    const guardandoUsuario = localStorage.getItem('usuario'); //trae el usuario guardado del local storage y lo almacena en una variable
    if(guardandoUsuario !== null) { //verificamos que no este vacio el local storage
      setUsuarioLogeado(guardandoUsuario);
    }
  }, [])

    //funcion para logearse
    const Logear = (evento) => {
    evento.preventDefault();

    if(usuario.trim() === '' || contrasenia.trim() === ''){
      alert('No se ha ingresado el usuario o la contraseña');
      return;
    }

    if(usuario === superUsuario && contrasenia === superContrasenia){//verificar que los datos digitados sean los correctos
      //local storage
      localStorage.setItem('usuario', usuario); //manda el usuario al local storage
      setUsuarioLogeado(usuario)//aqui le mandamos el usuario que va logearse
      alert('Iniciando Sesion...');
    }else{
      alert('El usuario o la contraseña son incorrectos')
    }
  }
    // Funcion de cerrado de sesion
    const CerrarSesion = () =>{
    localStorage.removeItem('usuario');//elimina el usuario guardado del local storage
    setUsuarioLogeado(null); // devolvemos el valor inicial del estado a null
    setUsuario('');// limpiamos el input de usuario
    setContrasenia('');//limpiamos el input de contraseña
  }

  return {usuario, setUsuario, contrasenia, setContrasenia, usuarioLogeado, Logear, CerrarSesion}
}