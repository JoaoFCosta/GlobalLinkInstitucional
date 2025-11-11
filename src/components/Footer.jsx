import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer d-flex justify-content-around align-items-center p-3 mt-5 border-top text-light">
        <div>
          <span className="fw-medium fs-4">
            <i className="bi bi-globe fs-1 me-2"></i>GlobalLink
          </span>
          <br />
          <span className="small fw-lighter">
            Conectando empresas globalmente com soluções inovadoras.
          </span>
        </div>

        <div>
          <span>© 2025 GlobalLink. Todos os direitos reservados.</span>
        </div>

        <div className="text-light">
          <span className="fw-medium fs-4">Contato</span>
          <br />
          <span className="fw-medium text-secondary">
            <i class="bi bi-envelope"></i> info@globallink.com
          </span>
          <br />
          <span className="fw-medium text-secondary">
            <i class="bi bi-telephone"></i> +55 14 99999-9999
          </span>
          <br />
          <span className="fw-medium text-secondary">
            <i class="bi bi-geo-alt"></i> Jaú, São Paulo
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
