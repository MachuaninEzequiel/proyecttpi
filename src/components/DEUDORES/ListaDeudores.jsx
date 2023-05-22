import React from "react";

import LineaDeudores from "./LineaDeudores";
import { Imprimir } from "../modalBoton";

const ListaDeudores = () => {
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
            height: "40rem",
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
                height: "35rem",
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
                  <h2>Listado de Deudores</h2>
                </caption>

                <thead class="table-light " className="pegado">
                  <tr>
                    {/* Ariano dice:
                        Fecha, nombre cliente, ventas realizadas,
                        cantidad, descripción productos, total por productos, total general.  
                    */}

                    <th>
                      <h5>#</h5>
                    </th>

                    <th scope="col">
                      <h5>Fechas</h5>
                    </th>

                    <th>
                      <h5 className="centrado">Nombre</h5>
                    </th>

                    <th>
                      <h5 className="centrado">Ventas Realizadas</h5>
                    </th>

                    <th>
                      <h5 className="centrado">Cantidad</h5>
                    </th>

                    <th>
                      <h5 className="centrado">Descripcion</h5>
                    </th>

                    <th>
                      <h5 className="centrado">Total por Producto</h5>
                    </th>

                    <th>
                      <h5>Total</h5>
                    </th>
                  </tr>
                </thead>
                <LineaDeudores />
              </table>
            </div>

            <Imprimir />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaDeudores;
