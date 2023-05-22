import React from "react";

import { BotonD } from "..";

import LineaCliente from "./LineaCliente";

const ListaClientes = () => {
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
                  <h2>Lista de Clientes</h2>
                </caption>

                <thead class="table-light sticky-top ">
                  <tr>
                    <th scope="col" className="centrado">
                      <h5>#</h5>
                    </th>
                    <th></th>
                    <th scope="col" className="centrado">
                      <h5>Nombre</h5>
                    </th>
                    <th></th>
                    <th scope="col" className="centrado">
                      <h5>Apellido</h5>
                    </th>
                    <th></th>
                    <th scope="col" className="centrado">
                      <h5>Correo</h5>
                    </th>
                    <th></th>
                    <th scope="col" className="centrado">
                      <h5>Telefono</h5>
                    </th>
                    <th></th>
                    <th scope="col" className="centrado">
                      <h5>Direccion</h5>
                    </th>
                    <th></th>
                    <th scope="col">
                      <h5>Acciones</h5>
                    </th>
                  </tr>
                </thead>
                <LineaCliente />
              </table>
            </div>
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
                Informacion del Ciente
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
                      <th scope="row">ID:</th>
                      <td>1234</td>
                    </tr>
                    <tr>
                      <th>CUIL:</th>
                      <td>1234</td>
                    </tr>
                    <tr>
                      <th>CORREO:</th>
                      <td>1234</td>
                    </tr>
                    <tr>
                      <th>PROVINCIA:</th>
                      <td>1234</td>
                    </tr>
                    <tr>
                      <th>CIUDAD:</th>
                      <td>1234</td>
                    </tr>
                    <tr>
                      <th>DIRECCION:</th>
                      <td>1234</td>
                    </tr>
                    <tr>
                      <th>TELEFONO:</th>
                      <td>1234</td>
                    </tr>
                    <tr>
                      <th>CODIGO POSTAL:</th>
                      <td>1234</td>
                    </tr>
                    <tr>
                      <th>RAZON SOCIAL:</th>
                      <td>1234</td>
                    </tr>
                    <tr>
                      <th>FECHA DE NACIEMIENTO:</th>
                      <td>1234</td>
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
                Modificar Cliente
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
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            B
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">APELLIDO:</th>
                      <td>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Apellido"
                            aria-label="Apellido"
                            aria-describedby="button-addon2"
                          />
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            B
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">ID:</th>
                      <td>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Id"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            B
                          </button>
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
                            placeholder="Id"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            B
                          </button>
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
                            placeholder="Id"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            B
                          </button>
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
                            placeholder="Id"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            B
                          </button>
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
                            placeholder="Id"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            B
                          </button>
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
                            placeholder="Id"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            B
                          </button>
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
                            placeholder="Id"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            B
                          </button>
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
                            placeholder="Id"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            B
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>RAZON SOCIAL:</th>
                      <td>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Id"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            B
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>FECHA DE NACIEMIENTO:</th>
                      <td>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Id"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            B
                          </button>
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
              <button type="button" class="btn btn-primary">
                Modificar Cliente
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
                Eliminar Cliente
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
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Destinatario:
                  </label>
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Mensaje:
                  </label>
                  <textarea class="form-control" id="message-text"></textarea>
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
              <button type="button" class="btn btn-primary">
                Enviar mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaClientes;
