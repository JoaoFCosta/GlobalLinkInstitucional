import React from "react";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3 mb-3 border-bottom shadow-sm fixed-top bg-white">
      <span className="fs-2 fw-medium">
        <i className="bi bi-globe text-primary fs-1 me-2"></i>GlobalLink
      </span>

      <div className="d-flex gap-4">
        <a href="#Inicio" className="fs-5 text-decoration-none text-black">
          Início
        </a>
        <a href="#Servicos" className="fs-5 text-decoration-none text-black">
          Serviços
        </a>
        <a href="#Sobre" className="fs-5 text-decoration-none text-black">
          Sobre
        </a>
      </div>
    </div>
  );
};

export default Header;
