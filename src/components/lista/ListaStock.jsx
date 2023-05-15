import React from "react";
import { Imprimir } from "./modalBoton";

import "./styles.css";

import LineaProveedores from "./LineaProveedores";

const ListaStock = () => {
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
                  <h2>Stock</h2>
                </caption>
                <thead class="table-light sticky-top ">
                  <tr>
                    <th scope="col">
                      <h5><b>Seleccionar</b></h5>
                    </th>
                    <th></th>
                    {/* Los inputs con icono */}
                    <th scope="col" style={{ width: "12rem" }} class="ml-2">
                        Cantidad
                    </th>
                    <th scope="col" style={{ width: "12rem" }} class="ml-2">
                        Cantidad Minima
                    </th>
                    <th scope="col" style={{ width: "12rem" }} class="ml-2">
                        Tipo
                    </th>
                    <th scope="col" style={{ width: "24rem" }} class="ml-2">
                        Descripcion
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
        
            
            <Imprimir />
          
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaStock;
