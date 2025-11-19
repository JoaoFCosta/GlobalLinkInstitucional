import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Parceria from "./assets/parceria.jpg";
import Planeta from "./assets/world.png";

function App() {
  return (
    <>
      <Header />

      <div className="corpo-site">
        {/* ===== INÍCIO ===== */}
        <section id="Inicio" className="container mt-5 mb-5 py-5">
          <div className="row align-items-center justify-content-center text-center text-md-start">
            <div className="col-12 col-md-6">
              <h1 className="hero-title">Conecte Empresas e ONGs</h1>
              <p className="hero-text fw-medium text-secondary">
                Gestão de recursos humanitários em regiões vulneráveis do
                Centro-Oeste Paulista.
              </p>
              <a
                href="https://global-link-six.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg btn-outline-primary mt-3"
              >
                Conheça a plataforma
              </a>

              <a
                href="/Manual-do-Usuario-1.pdf"
                className="btn btn-lg btn-outline-danger mt-3 ms-5"
                target="_blank"
              >
                Manual do Usuário
              </a>
            </div>

            <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex justify-content-center">
              <img
                src={Parceria}
                alt="Parceria"
                className="img-fluid rounded-5 shadow-sm"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </section>

        {/* ===== SERVIÇOS ===== */}
        <section
          id="Servicos"
          className="container mt-5 text-center d-flex flex-column justify-content-center"
        >
          <div className="mb-4">
            <h1 className="servicos-title fw-medium">Como Funciona</h1>
            <p className="servicos-text text-secondary">
              A GlobalLink conecta ONGs e empresas de forma simples,
              transparente e eficiente para gerar impacto social real.
            </p>
          </div>

          <div className="row justify-content-center g-4">
            <div className="col-12 col-md-5 col-lg-5 bg-body-secondary rounded-3 shadow-sm text-start p-4">
              <i className="bi bi-suit-heart fs-2"></i>
              <h5 className="fw-medium mt-2">Para ONGs</h5>
              <p className="fw-medium text-secondary mb-0">
                Publique suas necessidades, receba doações de empresas e
                gerencie recursos com transparência total.
              </p>
            </div>

            <div className="col-12 col-md-5 col-lg-5 bg-body-secondary rounded-3 shadow-sm text-start p-4">
              <i className="bi bi-building fs-2"></i>
              <h5 className="fw-medium mt-2">Para Empresas</h5>
              <p className="fw-medium text-secondary mb-0">
                Identifique oportunidades de impacto social, dirija suas doações
                e acompanhe o resultado de suas contribuições.
              </p>
            </div>

            <div className="col-12 col-md-5 col-lg-5 bg-body-secondary rounded-3 shadow-sm text-start p-4">
              <i className="bi bi-lightning-charge fs-2"></i>
              <h5 className="fw-medium mt-2">Gerenciamento Eficiente</h5>
              <p className="fw-medium text-secondary mb-0">
                Sistema integrado para conectar pedidos de necessidades com
                ofertas de doações em tempo real.
              </p>
            </div>

            <div className="col-12 col-md-5 col-lg-5 bg-body-secondary rounded-3 shadow-sm text-start p-4">
              <i className="bi bi-bar-chart-line-fill fs-2"></i>
              <h5 className="fw-medium mt-2">Impacto Mensurável</h5>
              <p className="fw-medium text-secondary mb-0">
                Relatórios detalhados sobre o impacto social gerado pelas
                doações e contribuições realizadas.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SOBRE ===== */}
        <section
          id="Sobre"
          className="container mt-5 mb-5 d-flex flex-column text-center justify-content-center"
        >
          <div className="mb-4">
            <h1 className="sobre-title">Sobre a GlobalLink</h1>
            <p className="sobre-text text-secondary">
              Somos uma plataforma dedicada a conectar ONGs e empresas, criando
              oportunidades de impacto social real. Facilitamos doações
              transparentes, gerenciamos necessidades e garantimos que cada
              contribuição gere resultado mensurável.
            </p>
          </div>

          <div className="row justify-content-center g-4 gap-md-3">
            <div className="col-10 col-sm-6 col-md-4 col-lg-3 bg-info rounded-3 p-3 shadow-lg text-light">
              <span className="fw-bolder fs-1">50+</span>
              <p className="fw-medium mb-1">ONGs Cadastradas</p>
              <small>Organizações gerenciando suas necessidades</small>
            </div>

            <div className="col-10 col-sm-6 col-md-4 col-lg-3 bg-info rounded-3 p-3 shadow-lg text-light">
              <span className="fw-bolder fs-1">60+</span>
              <p className="fw-medium mb-1">Empresas Parceiras</p>
              <small>Contribuindo para causas sociais</small>
            </div>

            <div className="col-10 col-sm-6 col-md-4 col-lg-3 bg-info rounded-3 p-3 shadow-lg text-light">
              <span className="fw-bolder fs-1">200+</span>
              <p className="fw-medium mb-1">Doações Realizadas</p>
              <small>Impacto social de verdade</small>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default App;
