import React from "react";
import "./styles-lista.css";

const RegUsuarios = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          backgroundColor: "#f2f2f2",
          paddingTop: "4rem",
          paddingBottom: "12rem",
        }}
      >
        <div
          className="rounded-3 py-5 shadow "
          style={{
            width: "37rem",
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
            <h2 className="mb-4">Registrar nuevo Usuario</h2>
            <form className="">
              <label for="Nombre" className="form-label">
                Nombre
              </label>
              <input type="Nombre" className="form-control imput" id="Nombre" />
              <br />
              <label for="Apellido" className="form-label">
                Apellido
              </label>
              <input
                type="Apellido"
                className="form-control imput"
                id="Apellido"
              />
              <br />
              <label for="DNI" className="form-label">
                Edad
              </label>
              <input type="Number" className="form-control imput" id="DNI" />
              <br />

              <label for="inputPassword5" class="form-label">
                E-Mail
              </label>
              <input type="e-mail" class="form-control"></input>
              <br />

              <label for="inputPassword5" class="form-label">
                Confirmar E-Mail
              </label>
              <input type="" class="form-control"></input>
              <br />

              <label for="Telef" className="form-label">
                Número de Telefono
              </label>
              <input
                type="Number"
                className="form-control imput"
                id="Telef"
                placeholder="+54 "
              />
              <br />
              <label for="inputPassword5" class="form-label">
                Contraseña
              </label>
              <input
                type="password"
                id="inputPassword5"
                class="form-control"
                aria-labelledby="passwordHelpBlock"
              ></input>
              {/*<input type="text" className="form-control imput" id="PyC" />*/}
              <br />

              <label for="inputPassword5" class="form-label">
                Confirmar contraseña
              </label>
              <input
                type="password"
                id="inputPassword5"
                class="form-control"
                aria-labelledby="passwordHelpBlock"
              ></input>
              {/*<input type="text" className="form-control imput" id="PyC" />*/}
              <br />

              <label for="Fnacim" className="form-label">
                Fecha de registro
              </label>
              <input type="date" className="form-control imput" id="Fnacim" />
              <br />
              <label for="Nombre" className="form-label">
                Usuario que registra
              </label>
              <input type="Nombre" className="form-control imput" id="Nombre" />
              <br />
              <br />
              <button type="submit" className="imprimir boton-foot">
                Registrar Usuario
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegUsuarios;
