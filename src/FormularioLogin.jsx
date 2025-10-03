import React from 'react'

const FormularioLogin = ({usuario, setUsuario, contrasenia, setContrasenia, Logear}) => {
  return (
    <div>
        <h2>Formulario de inicio de Sesion</h2>
        <form>
            <label htmlFor="usuario">Usuario: </label>
            <input type="text" id="usuario" placeholder="Usuario" value={usuario} 
            onChange={ (evento) => setUsuario(evento.target.value)} /><br/>

            <label htmlFor="Contraseña">Contraseña: </label>
            <input type="text" id="Contraseña" placeholder="Contraseña" value={contrasenia} 
            onChange={ (evento) => setContrasenia(evento.target.value)} /><br/>

            <button onClick={ (evento)=> Logear(evento)}>Ingresar</button>
        </form>
    </div>
  )
}
export default FormularioLogin;