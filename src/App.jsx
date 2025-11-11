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
        <div id="Inicio" className="container mt-5 mb-5 d-flex">
          <div>
            <h1 className="hero-title">Conecte Empresas e ONGs</h1>
            <p className="hero-text col-9 fw-medium text-secondary">
              Gestão de recursos humanitários em regiões vulneráveis do
              Centro-Oeste Paulista.
            </p>

            <a
              href="https://global-link-six.vercel.app/"
              target="_blank"
              className="btn btn-lg btn-outline-primary"
            >
              Conheça a plataforma
            </a>
          </div>

          <img src={Parceria} alt="" height={400} className="mt-5 rounded-5" />
        </div>

        <div
          id="Servicos"
          className="container mt-5 d-flex flex-column text-center justify-content-center"
        >
          <div>
            <h1 className="servicos-title fw-medium">Como Funciona</h1>
            <p className="servicos-text text-secondary">
              A GlobalLink conecta ONGs e empresas de forma simples,
              transparente e eficiente para gerar impacto social real.
            </p>
          </div>

          <div className="d-flex row justify-content-center gap-5">
            <div className="col-5 col-md-5 bg-body-secondary rounded-3 shadow-sm text-start p-4">
              <i className="bi bi-suit-heart fs-2"></i>
              <br /> <span className="fs-5 fw-medium">Para ONGs</span> <br />
              <span className="fw-medium text-secondary">
                Publique suas necessidades, receba doações de empresas e
                gerencie recursos com transparência total.
              </span>
            </div>

            <div className="col-5 col-md-5 bg-body-secondary rounded-3 shadow-sm text-start p-4">
              <i class="bi bi-building fs-2"></i>
              <br /> <span className="fs-5 fw-medium">Para Empresas</span>{" "}
              <br />
              <span className="fw-medium text-secondary">
                Identifique oportunidades de impacto social, dirija suas doações
                e acompanhe o resultado de suas contribuições.
              </span>
            </div>

            <div className="col-5 col-md-5 bg-body-secondary rounded-3 shadow-sm text-start p-4">
              <i class="bi bi-lightning-charge fs-2"></i>
              <br />{" "}
              <span className="fs-5 fw-medium">
                Gerenciamento Eficiente
              </span>{" "}
              <br />
              <span className="fw-medium text-secondary">
                Sistema integrado para conectar pedidos de necessidades com
                ofertas de doações em tempo real.
              </span>
            </div>

            <div className="col-5 col-md-5 bg-body-secondary rounded-3 shadow-sm text-start p-4">
              <i class="bi bi-bar-chart-line-fill fs-2"></i>
              <br /> <span className="fs-5 fw-medium">
                Impacto Mensurável
              </span>{" "}
              <br />
              <span className="fw-medium text-secondary">
                Relatórios detalhados sobre o impacto social gerado pelas
                doações e contribuições realizadas.
              </span>
            </div>
          </div>
        </div>

        <div
          id="Sobre"
          className="container mt-5 mb-5 d-flex flex-column text-center justify-content-center"
        >
          <div>
            <h1 className="sobre-title">Sobre a GlobalLink</h1>
            <p className="sobre-text text-secondary">
              Somos uma plataforma dedicada a conectar ONGs e empresas, criando
              oportunidades de impacto social real. Facilitamos doações
              transparentes, gerenciamos necessidades e garantimos que cada
              contribuição gere resultado mensurável.
            </p>
          </div>

          <div className="d-flex justify-content-center gap-5">
            <div className="bg-info col-2 rounded-3 p-3">
              <span className="fw-bolder fs-1 text-light">50+</span>
              <br />
              <span className="text-light fw-medium">ONGs Cadastradas</span>
              <br />
              <small className="text-light">
                Organizações gerenciando suas necessidades
              </small>
            </div>

            <div className="bg-info col-2 rounded-3 p-3">
              <span className="fw-bolder fs-1 text-light">60+</span>
              <br />
              <span className="text-light fw-medium">Empresas Parceiras</span>
              <br />
              <small className="text-light">
                Contribuindo para causas sociais
              </small>
            </div>

            <div className="bg-info col-2 rounded-3 p-3">
              <span className="fw-bolder fs-1 text-light">200+</span>
              <br />
              <span className="text-light fw-medium">Doações Realizadas</span>
              <br />
              <small className="text-light">Impacto social de verdade</small>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
