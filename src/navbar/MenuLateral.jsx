import React from "react";
import { MenuLateral__Contenido } from "./MenuLateral__Contenido";
import { Principal } from "./Principal";

export const MenuLateral = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-3 bg-light sidebar">
            <MenuLateral__Contenido />
          </nav>
          <main class="col-md-9">
            <Principal />
          </main>
        </div>
      </div>
    </>
  );
};
