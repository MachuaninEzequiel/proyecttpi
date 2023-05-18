import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Layout from "./components/Layout";
import { AdminProvider } from "./Context";

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

import {
  VentasClientes,
  VentasProv,
  RegistrarCliente,
  RegistrarProveedor,
  LoginHome,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <AdminProvider>
        <Layout>
          <Routes>
            <Route element={<LoginHome />} path="/" />
            <Route element={<VentasClientes />} path="Clientes" />
            <Route element={<VentasProv />} path="Proveedores" />
            <Route element={<RegistrarCliente />} path="RegCliente" />
            <Route element={<RegistrarProveedor />} path="RegProv" />
          </Routes>
        </Layout>
      </AdminProvider>
    </BrowserRouter>
  );
};

export default App;
