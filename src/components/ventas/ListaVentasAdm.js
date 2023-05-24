import React from "react";
import "./lineaEstilos.css";
import { Imprimir } from "../modalBoton";

import { BotonD } from "..";

import LineaVentasAdm from "./LineaVentasAdm";

const ListaVentasAdm = () => {
  return (
    <>
      {/* Forma del recuadro*/}
      <div
        style={{
          display: "grid",
          placeItems: "center",
          backgroundColor: "#f2f2f2",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <div
          className="rounded-3  shadow "
          style={{
            width: "70rem",
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
            {/* Scroll de la grilla ,  Barra de scroll a 67rem y el recuadro tiene 70rem, altura de 30rem donde el cuadro tiene 40rem */}
            <div
              className="rounded-3 py-5  shadow "
              class="overflow-auto"
              style={{
                width: "67rem",
                height: "35rem",
                display: "grid",
                placeItems: "center",
                backgroundColor: "white",
              }}
            >
              <table
                class="table caption-top table-hover "
                style={{ width: "60rem", placeItems: "center" }}
              >
                <caption class="mb-3 mt-2 ">
                  <h2>Lista de Ventas</h2>
                </caption>

                <thead class="table-light " className="pegado">
                  <tr>
                    <th scope="col" className="centrado">
                      <h5>#</h5>
                    </th>
                    <th></th>
                    <th scope="col">
                      <h5>Fecha</h5>
                    </th>
                    <th></th>
                    <th scope="col" className="centrado">
                      <h5>Nombre</h5>
                    </th>
                    <th></th>
                    <th scope="col" className="centrado">
                      <h5>Articulo</h5>
                    </th>
                    <th></th>
                    <th scope="col" className="centrado">
                      <h5>Cantidad</h5>
                    </th>
                    <th></th>
                    <th scope="col" className="centrado">
                      <h5>Total</h5>
                    </th>
                    <th></th>
                    <th scope="col">
                      <h5>Acciones</h5>
                    </th>
                  </tr>
                </thead>
                <LineaVentasAdm />
              </table>
            </div>
            <Imprimir />
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="infocliente"
        tabindex="-1"
        aria-labelledby="infoclienteModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="infoclienteModalLabel">
                Informacion de la Venta
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="position-absolute  top-0 start-50 translate-middle">
                  <p class="h3 pt-5 "> PEPE </p>
                </div>
                <br></br>
                <br></br>

                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row">CANTIDAD:</th>
                      <td className="derecha">1294</td>
                    </tr>
                    <tr>
                      <th scope="row">TOTAL:</th>
                      <td className="derecha">312$</td>
                    </tr>
                    <tr>
                      <th>CUIL:</th>
                      <td className="derecha">20-40895777-4</td>
                    </tr>
                    <tr>
                      <th>CORREO:</th>
                      <td className="derecha">pepe@correo.com</td>
                    </tr>
                    <tr>
                      <th>PROVINCIA:</th>
                      <td className="derecha">Chaco</td>
                    </tr>
                    <tr>
                      <th>CIUDAD:</th>
                      <td className="derecha">Resistencia</td>
                    </tr>
                    <tr>
                      <th>DIRECCION:</th>
                      <td className="derecha">Av. 9 de julio 3000</td>
                    </tr>
                    <tr>
                      <th>TELEFONO:</th>
                      <td className="derecha">3624098670</td>
                    </tr>
                    <tr>
                      <th>CODIGO POSTAL:</th>
                      <td className="derecha">3500</td>
                    </tr>
                    <tr>
                      <th>FECHA DE VENTA:</th>
                      <td className="derecha">14/03/86</td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="modificarcliente"
        tabindex="-1"
        aria-labelledby="modificarclienteModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modificarclienteModalLabel">
                Modificar Venta
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row">NOMBRE:</th>
                      <td>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Nombre"
                            aria-label="Nombre"
                            aria-describedby="button-addon2"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">TOTAL:</th>
                      <td>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Total"
                            aria-label="Apellido"
                            aria-describedby="button-addon2"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">CANTIDAD:</th>
                      <td>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Cantidad"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>CUIL:</th>
                      <td>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Cuil"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>CORREO:</th>
                      <td>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Correo"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>PROVINCIA:</th>
                      <td>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Provincia"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>CIUDAD:</th>
                      <td>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Ciudad"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>DIRECCION:</th>
                      <td>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Direccion"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>TELEFONO:</th>
                      <td>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Telefono"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>CODIGO POSTAL:</th>
                      <td>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Codigo Postal"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>FECHA DE VENTA:</th>
                      <td>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Fecha de venta"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" class="btn btn-success">
                Modificar Venta
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="eliminarcliente"
        tabindex="-1"
        aria-labelledby="eliminarclienteModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="eliminarclienteModalLabel">
                Eliminar Venta
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div
                  class="mb-0"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src="https://media.istockphoto.com/id/1352235920/es/vector/icono-de-signo-de-exclamaci%C3%B3n-icono-de-advertencia-rojo-signo-triangular-rojo-vectorial-con.jpg?s=612x612&w=0&k=20&c=uQ5jcx1qr4QWHdl_b-duGfmbqrKc4DpqNsMAJ1OkLgE="
                    alt="Logo"
                    style={{
                      width: "150px",
                      height: "auto",
                    }}
                  />
                </div>
                <div
                  class="mb-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h4>Desea eliminar esta venta?</h4>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                id="liveAlertBtn"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaVentasAdm;
