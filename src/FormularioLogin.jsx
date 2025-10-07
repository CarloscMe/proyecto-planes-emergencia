import React from 'react'

const FormularioLogin = ({usuario, setUsuario, contrasenia, setContrasenia, Logear}) => {//parametros de entrada
  return (
    <div id='login-container'>
        <h2 id='titulo--login'>Formulario de inicio de Sesion</h2>
        <form id='formulario'>
            <label htmlFor="usuario">Usuario: </label>
            <input type="text" id="usuario" placeholder="Usuario" value={usuario} 
            onChange={ (evento) => setUsuario(evento.target.value)} />{/*actualiza el estado con el valor escrito en el input*/}

            <label htmlFor="Contraseña">Contraseña: </label>
            <input type="text" id="Contraseña" placeholder="Contraseña" value={contrasenia} 
            onChange={ (evento) => setContrasenia(evento.target.value)} />{/*actualiza el estado con el valor escrito en el input*/}

            <button onClick={ (evento)=> Logear(evento)} id='btn--enviar'>Ingresar</button>{/*llamada de la funcion logear*/}

        </form>
    </div>
  )
}
export default FormularioLogin;