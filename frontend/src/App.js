import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/Login";
import Registro from "./componentes/Registro";
import Asignacion from "./componentes/Asignacion";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/asignacion" element={<Asignacion />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
