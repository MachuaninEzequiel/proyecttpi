import React from "react";
import "./Navbar.css";
const icono = require("./logoR.png");
const hamburguesaMenu= require('./hamb.png')

const Navbar1 = () => {
  return (
    <>
      <nav class="navbar navbar-light">
        
        <div class="container-fluid">
          
          <a class="navbar-brand" href="8">
            <img src={icono} alt="Logo" className="icono"></img>
          </a>
          
          <button
            className="hamb__button"
  
            type="button"

            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >

           <img src={hamburguesaMenu} className="hamb__icon"></img>

          </button>
          
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >



            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>

              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Hola, Usuario.
              </h5>

            </div>



            <div class="offcanvas-body">

              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">


                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="3">
                    <h2>Inicio</h2>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="4">
                    <h4>Productos</h4>
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="2"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <h5>Listados</h5>
                  </a>
                  <ul
                    className="listaDrop"

                    class="dropdown-menu listaDrop"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    
                    <li>
                      <a class="dropdown-item subItem" href="6">
                        Compras
                      </a>
                    </li>
                    
                    
                    
                    <li>
                      <a class="dropdown-item subItem" href="5">
                        Ventas
                      </a>
                    </li>
                    
                    
                    
                    {/* <li>
                      <hr class="dropdown-divider" />
                    </li> */}
                    
                    
                    <li>
                      <a class="dropdown-item subItem" href="1">
                        Deudores
                      </a>
                    </li>
                  
                    <li>
                      <a class="dropdown-item subItem" href="1">
                        Usuarios y Proveedores
                      </a>
                    </li>

                  
                  </ul>
                
                
                </li>
              
              
              </ul>
              
              {/*
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Buscar"
                />
                <button class="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </form> */}



            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
