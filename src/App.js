import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import {
  Clientes,
  Empleado,
  Recuadro,
  Search,
  ListaClientes,
  ListaProveedores,
  Modale,
  Login,
  Login1,
  Navbar,
  Navbar1,
  Navbar2,
} from "./components";

const App = () => {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar1 />
      </div>
      <div>
        <Empleado />
      </div>
    </div>
  );
};

export default App;
