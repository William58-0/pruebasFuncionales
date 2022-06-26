
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [fechaNacimiento, setFecha] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [confirmacion, setConfirmacion] = useState("");
  const [redirect, setRedirect] = useState(false);

  const renderRedirect = () => {
    if (redirect) {
      return <Navigate to={'/'} />
    }
  }

  const Registrar = async () => {
    const body = {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      fechaNacimiento: fechaNacimiento,
      contrasenia: contrasenia,
      confirmacion: confirmacion,
    }
    axios.post('http://localhost:3001/registrar', { body }).then(res => {
      if (res.data.code === 200) {
        Swal.fire('Registrado',
          res.data.message,
          'success'
        )
        setRedirect(true);
      } else {
        Swal.fire('Error',
          res.data.message,
          'error'
        )
      }
    })
      .catch((err) => console.log(err));
  }

  return (
    <form>
       <h1>201909103</h1>
      <label>Nombre:<br />
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <br />
      <label>Apellido:<br />
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </label>
      <br />
      <label>Correo:<br />
        <input
          type="text"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </label>
      <br />
      <label>Fecha de Nacimiento:<br />
        <input
          type="text"
          value={fechaNacimiento}
          onChange={(e) => setFecha(e.target.value)}
        />
      </label>
      <br />
      <label>Contraseña:<br />
        <input
          type="text"
          value={contrasenia}
          onChange={(e) => setContrasenia(e.target.value)}
        />
      </label>
      <br />
      <label>Confirmacion de contraseña:<br />
        <input
          type="password"
          value={confirmacion}
          onChange={(e) => setConfirmacion(e.target.value)}
        />
      </label>
      <br />
      <Button onClick={() => Registrar()}>Registrar</Button>
      <br />
      <Link to="/">
        <button>Login</button>
      </Link>
      {renderRedirect()}
    </form>
    
  )
}



