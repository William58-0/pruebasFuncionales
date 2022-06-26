
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Asignacion() {
  const [curso, setCurso] = useState("Matematicas");
  const [seccion, setSeccion] = useState("A");
  const [dia, setDia] = useState("Lunes");
  const [hora, setHora] = useState("7:00 - 9:00");
  const [mensaje, setMensaje] = useState("");
  const [idEstudiante, setId] = useState(1);

  const cursos = [
    'Matematicas',
    'Lenguaje',
    'Quimica',
  ]

  const dias = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
  ]

  const horas = [
    '7:00 - 9:00',
    '9:00 - 11:00',
    '11:00 - 13:00'
  ]

  const secciones = [
    'A',
    'B',
    'C'
  ]

  const Asignar = async () => {
    const body = {
      idEstudiante: idEstudiante,
      curso: curso,
      seccion: seccion,
      dia: dia,
      hora: hora
    }
    axios.post('http://localhost:3001/asignar', { body }).then(res => {
      if (res.data.code == 200) {
        Swal.fire('Gud',
          res.data.message,
          'success'
        )
      } else {
        Swal.fire('Error',
          res.data.message,
          'error'
        )
      }
      setMensaje(res.data.message);
    })
      .catch((err) => console.log(err));
  }

  return (
    <form>
      <h1>Asignar Cursos</h1>
      <input type='text'
        style={{
          borderWidth: 0,
          borderColor: 'transparent',
          fontSize: 'larger',
          fontWeight: 'bold',
          color: 'blue'
        }}
        value={mensaje}>
      </input><br />
      <label>IdEstudiante:<br />
        <input
          type="text"
          value={idEstudiante}
          onChange={(e) => setId(e.target.value)}
        />
      </label>
      <br />
      <label>Curso:<br />
        <select onChange={(e) => setCurso(e.target.value)} >
          {
            cursos.map((curso) =>
              <option key={curso} value={curso}>{curso}</option>
            )}
        </select>
      </label>
      <br />
      <label>Seccion:<br />
        <select onChange={(e) => setSeccion(e.target.value)} >
          {
            secciones.map((seccion) =>
              <option key={seccion} value={seccion}>{seccion}</option>
            )}
        </select>
      </label>
      <br />
      <label>Dia:<br />
        <select onChange={(e) => setDia(e.target.value)} >
          {
            dias.map((dia) =>
              <option key={dia} value={dia}>{dia}</option>
            )}
        </select>
      </label>
      <br />
      <label>Hora<br />
        <select onChange={(e) => setHora(e.target.value)} >
          {
            horas.map((hora) =>
              <option key={hora} value={hora}>{hora}</option>
            )}
        </select>
      </label>
      <br />
      <Button onClick={() => Asignar()}>Asignar</Button>
      <br />
      <Link to="/">
        <button>Salir</button>
      </Link>

    </form>

  )
}



