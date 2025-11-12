import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 border-top">
      <div className="container py-4">
        <div className="row gy-4 text-center text-lg-start align-items-center">
          {/* Logo e descrição */}
          <div className="col-12 col-lg-4">
            <span className="fw-medium fs-4 d-flex align-items-center justify-content-center justify-content-lg-start">
              <i className="bi bi-globe fs-1 me-2 text-primary"></i>GlobalLink
            </span>
            <p className="small fw-lighter mb-0 mt-2">
              Conectando empresas globalmente com soluções inovadoras.
            </p>
          </div>

          {/* Direitos autorais */}
          <div className="col-12 col-lg-4 text-center">
            <span>© 2025 GlobalLink. Todos os direitos reservados.</span>
          </div>

          {/* Contato */}
          <div className="col-12 col-lg-4">
            <span className="fw-medium fs-4 d-block mb-2">Contato</span>
            <p className="mb-1 text-secondary">
              <i className="bi bi-envelope me-2"></i>info@globallink.com
            </p>
            <p className="mb-1 text-secondary">
              <i className="bi bi-telephone me-2"></i>+55 14 99999-9999
            </p>
            <p className="mb-0 text-secondary">
              <i className="bi bi-geo-alt me-2"></i>Jaú, São Paulo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
