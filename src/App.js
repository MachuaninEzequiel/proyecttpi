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
  ListaStock,
  Modale,
  Login,
  Login1,
  //Navbar,
  Navbar1,
  //Navbar2
} from "./components";
import ListaVentas from "./components/lista/ListaVentas";

const App = () => {
  return (
    <div>
      <div className="gradient__bg padre">
        <Navbar1 />
        <div className="hijo">
          <ListaStock />
        </div>
      </div>
    </div>
  );
};

export default App;
