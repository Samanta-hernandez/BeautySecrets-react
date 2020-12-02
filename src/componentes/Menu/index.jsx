import { Link } from "react-router-dom";
import logo from "../../recursos/img/logo.png";
//import "../../routes/router"
function Menu() {
  return (

    <section className="menu fixed-top bg-white">
      <div className="container ">
        <nav className="navbar navbar-expand-lg navbar-light">
          {/* <!-- Logo --> */}
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <!-- enlaces menú --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto ">
              {/* <!--inicio  --> */}
              <li className="nav-item ">
                <Link to="/" className="nav-link text-body-x mr-5" >Inicio</Link>
              </li>
              {/* <!-- Cursos --> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-body-x mr-5" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Cursos</a>
                <div className="dropdown-menu text-body-x">
                  <Link to="Capilares" className="dropdown-item">Mascarillas Capilares</Link>
                  <Link to="Faciales" className="dropdown-item" >Mascarillas Faciales</Link>
                  <Link to="Maquillaje"className="dropdown-item" >Maquillaje</Link>
                  <Link to="Peinados"className="dropdown-item" >Peinados</Link>
                  <a className="dropdown-item" href="#">Otros tips de Belleza</a>
                </div>
              </li>
              {/* <!-- S. Nosotros --> */}
              <li className="nav-item ">
                <a className="nav-link text-body-x mr-5" href="#quienesSomos" id="sobrN">Sobre nosotros</a>
              </li>
              {/* <!-- Ingresar --> */}
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle text-body-x" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Ingresar</a>
                <div className="dropdown-menu text-body-x ">
                  <Link to="iniciar" className="dropdown-item">Inicia sesión</Link>
                  <Link to="registrarse" className="dropdown-item">Registrate</Link>
                </div>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </section>

  );
}

export default Menu 