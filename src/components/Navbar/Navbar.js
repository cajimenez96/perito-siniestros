import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid navbar-logo col-lg-6">
        <a className="navbar-brand ms-5" href="/#">EL GENIO DEL SINIESTRO</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item p-2"><a className="nav-link active" aria-current="page" href="/#">Inicio</a></li>
          <li className="nav-item p-2"><a className="nav-link active" aria-current="page" href="/#">Gestionamos tu siniestro</a></li>
          <li className="nav-item p-2"><a className="nav-link active" aria-current="page" href="/#">Reparación sin costo</a></li>
          <li className="nav-item p-2"><a className="nav-link active" aria-current="page" href="/#">Presupuesto</a></li>
          <li className="nav-item p-2"><a className="nav-link active" aria-current="page" href="/#">Vendé tu auto chocado</a></li>
          <li className="nav-item p-2"><a className="nav-link active" aria-current="page" href="/#">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
