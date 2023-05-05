import React from "react";
import "./login.css";

const Login = () => {
  return (
    <>
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
          className="rounded-3 py-5 shadow "
          style={{
            width: "90rem",
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
            <div
              class="btn-group"
              role="group"
              aria-label="Basic example"
              className="wobble-horizontal-bottom"
            >
              <button type="button" class="btn btn-primary">
                Izquierdo
              </button>
              <button type="button" class="btn btn-primary">
                Medio
              </button>
              <button type="button" class="btn btn-primary">
                Derecho
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
