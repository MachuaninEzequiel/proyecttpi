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
  Login,
  Navbar2,
} from "./components";

const App = () => {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar2 />
      </div>
      <div>
        <Lista />
      </div>
    </div>
  );
};

export default App;
