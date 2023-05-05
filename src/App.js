import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import {
  Clientes,
  Proveedores,
  Empleado,
  Recuadro,
  Lista,
  Modale,
  Navbar,
} from "./components";

const App = () => {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
      </div>
      <div>
        <Empleado />
      </div>
    </div>
  );
};

export default App;
