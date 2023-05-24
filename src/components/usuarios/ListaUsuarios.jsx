import React from "react";
import { Imprimir } from "../modalBoton";
import LineaUsuarios from "./LineaUsuarios";
import "../styles-lista.css";

// falta centrar el T-Head

const ListaUsuarios = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          backgroundColor: "#f2f2f2",
          paddingTop: "2rem",
          paddingBottom: "6rem",
        }}
      >
        <div
          className="rounded-3 shadow "
          style={{
            width: "82rem",
            height: "45rem",
            display: "grid",
            placeItems: "center",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            {/* Scroll de la grilla */}
            <div
              className="rounded-3 py-5 shadow "
              class="overflow-auto"
              style={{
                width: "80rem",
                height: "40rem",
                display: "grid",
                placeItems: "center",
                backgroundColor: "white",
              }}
            >
              <table
                class="table caption-top table-hover "
                style={{ width: "74rem", placeItems: "center" }}
              >
                <caption class="mb-3">
                  <h2>Listado de Usuarios</h2>
                </caption>

                <thead class="table-light" className="pegado">
                  <tr>
                    {/* Ariano dice:
                        Fecha, nombre cliente, ventas realizadas,
                        cantidad, descripción productos, total por productos, total general.  
                    */}

                    <th>
                      <h5>#</h5>
                    </th>

                    <th scope="col">
                      <h5>ID</h5>
                    </th>

                    <th>
                      <h5>Apellido</h5>
                    </th>

                    <th>
                      <h5>Area</h5>
                    </th>

                    <th>
                      <h5>Telefono</h5>
                    </th>

                    <th>
                      <h5>E-Mail</h5>
                    </th>

                    <th>
                      <h5>Fecha de Registro</h5>
                    </th>
                  </tr>
                </thead>
                <LineaUsuarios />
              </table>
            </div>
            <div className="conteiner-registro">
              <button className="imprimir boton-foot">Registrar Usuario</button>
              <Imprimir />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaUsuarios;
