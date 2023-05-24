import React from "react";
import "./lineaEstilos.css";
import { Imprimir } from "../modalBoton";
import { Button } from "reactstrap";

import LineaProvAdmin from "./LineaProvAdm";
import { Search } from "@mui/icons-material";

const ListProvAdm = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          backgroundColor: "#f2f2f2",
          paddingTop: "2rem",
          paddingBottom: "4rem",
        }}
      >
        <div
          className="rounded-3 shadow "
          style={{
            width: "79rem",
            height: "38rem",
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
                width: "77rem",
                height: "33rem",
                display: "grid",
                placeItems: "center",
                backgroundColor: "white",
              }}
            >
              <table
                class="table caption-top table-hover "
                style={{ width: "71rem", placeItems: "center" }}
              >
                <caption class="mb-3">
                  <h2>Lista de Proveedores</h2>
                  <div className="procBotonos">
                    <div style={{ marginRight: "20px" }}>
                      <Button color="success">
                        <a class="my-link" href="RegProv">
                          {" "}
                          New{" "}
                        </a>
                      </Button>
                    </div>
                  </div>
                </caption>
                <thead class="table-light " className="pegado">
                  <tr>
                    <th scope="col">
                      <h5>#</h5>
                    </th>
                    <th></th>
                    <th scope="col">
                      <h5>Id</h5>
                    </th>
                    <th></th>
                    {/* Los inputs con icono */}
                    <th scope="col" className="centrado">
                      <h5>Nombre</h5>
                    </th>
                    <th></th>
                    <th scope="col" className="centrado">
                      <h5>Cuil</h5>
                    </th>
                    <th></th>
                    <th scope="col" className="centrado">
                      <h5>Correo</h5>
                    </th>
                    <th></th>
                    <th scope="col" className="centrado">
                      <h5>Direccion</h5>
                    </th>
                    <th></th>
                    <th scope="col" className="centrado">
                      <h5>Telefono</h5>
                    </th>
                    <th></th>
                    <th scope="col" className="centrado">
                      <h5>Cod Postal</h5>
                    </th>

                    <th></th>
                    <th scope="col">
                      <h5>Acciones</h5>
                    </th>
                  </tr>
                </thead>

                <LineaProvAdmin />
              </table>
            </div>
          </div>
          <div>
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
                Informacion del Proveedor
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
                      <td className="derecha">129034</td>
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
                      <th>RAZON SOCIAL:</th>
                      <td className="derecha">Soltero</td>
                    </tr>
                    <tr>
                      <th>FECHA DE NACIEMIENTO:</th>
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
                Modificar Proveedor
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
                      <th>RAZON SOCIAL:</th>
                      <td>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Razon social"
                            aria-label="NId"
                            aria-describedby="button-addon2"
                          />
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
                            placeholder="Fecha de nacimiento"
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
              <button type="button" class="btn btn-primary">
                Editar Cliente
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
                Eliminar Proveedor
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
                  <h4>Desea eliminar este proveedor?</h4>
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

export default ListProvAdm;
