import { useState, useEffect} from "react";

export const useStateLogin = (superUsuario, superContrasenia) =>{//recibe como parametros el usuario y contraseña validos
    const [usuario, setUsuario] = useState(''); 
    const [contrasenia, setContrasenia] = useState('');
    const [usuarioLogeado, setUsuarioLogeado] = useState(null);// almacena quien estara logeado, null por defecto si no hay

    useEffect(() => {
    const guardandoUsuario = localStorage.getItem('usuario'); //trae el usuario guardado del local storage y lo almacena en una variable
    if(guardandoUsuario !== null) { //verificamos que no este vacio el local storage
      setUsuarioLogeado(guardandoUsuario);//guarda el usuario logeado en el estado
    }
  }, [])

    //funcion para logearse
    const Logear = (evento) => {
    evento.preventDefault();

    if(usuario.trim() === '' || contrasenia.trim() === ''){//verificar que no esten vacios
      alert('No se ha ingresado el usuario o la contraseña');
      return;
    }

    if(usuario === superUsuario && contrasenia === superContrasenia){//verificar que los datos digitados coincidan con los parametros
      //local storage
      localStorage.setItem('usuario', usuario); //guarda el usuario en localStorage
      setUsuarioLogeado(usuario)//actualiza el estado usuarioLogeado con el usuario valido
      alert('Iniciando Sesion...');
    }else{
      alert('El usuario o la contraseña son incorrectos')
    }
  }
    // Funcion de cerrado de sesion
    const CerrarSesion = () =>{
    localStorage.removeItem('usuario');//borra el usuario guardado del local storage
    setUsuarioLogeado(null); // devolvemos el estado inicial usuarioLogeado a null
    setUsuario('');// limpiamos el input de usuario
    setContrasenia('');//limpiamos el input de contraseña
  }
  //devuelve un objeto con las propiedades 
  return {usuario, setUsuario, contrasenia, setContrasenia, usuarioLogeado, Logear, CerrarSesion}
}