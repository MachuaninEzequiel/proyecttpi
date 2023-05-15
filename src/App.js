import React from "react";
//import { BrowserRouter, Route, Routes } from "react-router-dom";

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

import { VentasClientes, VentasProv } from "./pages";

const App = () => {
  return (
    //<BrowserRouter>
    //<Routes>
    <div>
      <div className="gradient__bg">
        <Navbar1 />
      </div>
      <div>
        <VentasProv />
      </div>
    </div>
    //</Routes>
    //</BrowserRouter>
  );
};

export default App;
