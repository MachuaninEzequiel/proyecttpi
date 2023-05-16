import React from "react";
import { Imprimir } from "./modalBoton";

import "./styles.css";

import LineaVentas from "./LineaVentas";

const ListaVentas = () => {
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
                  <h2>Ventas</h2>
                </caption>
                <thead class="table-light sticky-top ">
                  <tr>
                    <th scope="col">
                      <h5>
                        <b>#</b>
                      </h5>
                    </th>
                    <th></th>
                    {/* Los inputs con icono */}
                    <th scope="col" style={{ width: "12rem" }} class="ml-2">
                      Fecha
                    </th>
                    <th scope="col" style={{ width: "12rem" }} class="ml-2">
                      Nombre
                    </th>
                    <th scope="col" style={{ width: "24rem" }} class="ml-2">
                      Articulos
                    </th>
                    <th scope="col" style={{ width: "12rem" }} class="ml-2">
                      Ceantidad
                    </th>
                    <th scope="col" style={{ width: "12rem" }} class="ml-2">
                      Total
                    </th>
                  </tr>
                </thead>
                <LineaVentas />
              </table>
            </div>

            <Imprimir />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaVentas;
