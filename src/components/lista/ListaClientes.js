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
                    <th scope="col">
                      <h5>#</h5>
                    </th>
                    <th></th>
                    <th scope="col" style={{ width: "9rem" }} class="ml-2">
                      <div class="input-group ">
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            class="bi bi-search"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                          </svg>
                        </button>
                      </div>
                    </th>
                    <th></th>
                    <th scope="col" style={{ width: "9rem" }} class="ml-2">
                      <div class="input-group ">
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            class="bi bi-search"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                          </svg>
                        </button>
                      </div>
                    </th>
                    <th></th>
                    <th scope="col">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Correo"
                          aria-label="Correo"
                          aria-describedby="button-addon2"
                        />

                        <button
                          class="btn btn-outline-secondary"
                          type="button"
                          id="button-addon2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            class="bi bi-search"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                          </svg>
                        </button>
                      </div>
                    </th>
                    <th></th>
                    <th scope="col">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Telefono"
                          aria-label="Telefono"
                          aria-describedby="button-addon2"
                        />

                        <button
                          class="btn btn-outline-secondary"
                          type="button"
                          id="button-addon2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            class="bi bi-search"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                          </svg>
                        </button>
                      </div>
                    </th>
                    <th></th>
                    <th scope="col">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Direccion"
                          aria-label="Direccion"
                          aria-describedby="button-addon2"
                        />

                        <button
                          class="btn btn-outline-secondary"
                          type="button"
                          id="button-addon2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            class="bi bi-search"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                          </svg>
                        </button>
                      </div>
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
                <div class="position-absolute top-0 start-0 translate-middle">
                  <p class="h3"> PEPE </p>
                </div>
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
                Eliminar cliente
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