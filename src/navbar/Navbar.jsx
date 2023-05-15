import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';

export function Navbar() {
  
  const estilo = {
    backgroundColor:'#01FF80',
    backgroundColor:'aquamarine',
    'box-shadow':'0px 0px 0px'
  };
  
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light" style={estilo}>
        <div class="container-fluid">
          <a style={{color:'Black'}} class="navbar-brand" href="#">
            <b>Reciplas</b>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>

            <span class="navbar-text" style={{color:'black'}}>Hola, Usuario</span>
          
          
          </div>
        </div>
      </nav>
    </>
  );
}
