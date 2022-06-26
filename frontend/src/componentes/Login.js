import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [redirect, setRedirect] = useState(false);

  const renderRedirect = () => {
    if (redirect) {
      return <Navigate to={'/asignacion'} />
    }
  }

  const IniciarSesion = async () => {
    const body = {
      correo: correo,
      contrasenia: contrasenia
    }
    axios.post('http://localhost:3001/iniciarSesion', { body }).then(res => {
      if (res.data.code === 200) {
        Swal.fire('Gud',
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
      <label>Correo:<br />
        <input
          type="text"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </label>
      <br />
      <label>Contraseña:<br />
        <input
          type="password"
          value={contrasenia}
          onChange={(e) => setContrasenia(e.target.value)}
        />
      </label>
      <br />
      <Button className="btn btn-primary" onClick={() => IniciarSesion()}>Iniciar Sesion</Button>
      <br />
      <Link to="/registro">
        <button>Registro</button>
      </Link>
      {renderRedirect()}
    </form>
  )
}

