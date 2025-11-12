import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm border-bottom">
      <div className="container-fluid">
        <a
          className="navbar-brand fs-2 fw-medium d-flex align-items-center"
          href="#"
        >
          <i className="bi bi-globe text-primary fs-1 me-2"></i>GlobalLink
        </a>

        {/* Botão do menu responsivo */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Itens do menu */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a href="#Inicio" className="nav-link fs-5 text-black">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a href="#Servicos" className="nav-link fs-5 text-black">
                Serviços
              </a>
            </li>
            <li className="nav-item">
              <a href="#Sobre" className="nav-link fs-5 text-black">
                Sobre
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
