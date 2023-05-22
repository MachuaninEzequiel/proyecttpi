import React from "react";
import { Imprimir } from "../modalBoton";

import "../styles-lista.css";
import LineaCompras from "./LineaCompras";

const ListaCompras = () => {
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
            width: "75rem",
            height: "36rem",
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
                width: "72rem",
                height: "31rem",
                display: "grid",
                placeItems: "center",
                backgroundColor: "white",
              }}
            >
              <table
                class="table caption-top table-hover "
                style={{ width: "66rem", placeItems: "center" }}
              >
                <caption class="mb-3">
                  <h2>Compras</h2>
                </caption>
                <thead class="table-light sticky-top ">
                  <tr>
                    <th scope="col" style={{ width: "6rem" }} class="ml-2">
                      <h5>
                        <b>#</b>
                      </h5>
                    </th>

                    {/* Los inputs con icono */}
                    <th scope="col" style={{ width: "6rem" }} class="ml-2">
                      Fecha
                    </th>

                    <th scope="col" style={{ width: "6rem" }} class="ml-2">
                      ID
                    </th>
                    <th scope="col" style={{ width: "6rem" }} class="ml-2">
                      Proveedor
                    </th>
                    {/* <th scope="col" style={{ width: "12rem" }} class="ml-2">
                      Recepcionista
                    </th>
                    <th scope="col" style={{ width: "12rem" }} class="ml-2">
                      Cantidad (Kg)
                    </th>

                    <th scope="col" style={{ width: "12rem" }} class="ml-2">
                      Descripcion 
                    </th>

                    <th scope="col" style={{ width: "12rem" }} class="ml-2">
                      Total (Kg) 
                    </th> */}

                    <th scope="col" style={{ width: "6rem" }} class="ml-2">
                      Total
                    </th>

                    <th scope="col" style={{ width: "6rem" }} class="ml-2">
                      Mas
                    </th>
                  </tr>
                </thead>
                <LineaCompras />
              </table>
            </div>

            <Imprimir />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaCompras;
