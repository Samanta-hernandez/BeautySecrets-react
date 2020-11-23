import logo from "../../recursos/img/logo.png"
import "../../routes/router"
function Menu (){
    return(

  <section className="menu fixed-top bg-white">
        <div class="container ">
              <nav class="navbar navbar-expand-lg navbar-light">
                {/* <!-- Logo --> */}
                <a class="navbar-brand" href="#">
                    <img src={logo} alt=""/>
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/* <!-- enlaces menú --> */}
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto ">
                    {/* <!--inicio  --> */}
                    <li class="nav-item ">
                        <a class="nav-link text-body-x mr-5" href="index.html">Inicio</a>
                    </li>
                    {/* <!-- Cursos --> */}
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-body-x mr-5" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Cursos</a>
                        <div class="dropdown-menu text-body-x">
                          <link to="Capilares" class="dropdown-item">Mascarillas Capilares</link>
                          <a class="dropdown-item" href="MascFaciales.html">Mascarillas Faciales</a>
                          <a class="dropdown-item" href="Maquillaje.html">Maquillaje</a>
                          <a class="dropdown-item" href="Peinados.html">Peinados</a>
                          <a class="dropdown-item" href="#">Otros tips de Belleza</a>
                        </div>
                    </li>
                    {/* <!-- S. Nosotros --> */}
                    <li class="nav-item ">
                        <a class="nav-link text-body-x mr-5" href="#quienesSomos" id="sobrN">Sobre nosotros</a>
                    </li>
                    {/* <!-- Ingresar --> */}
                    <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle text-body-x" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Ingresar</a>
                        <div class="dropdown-menu text-body-x ">
                          <a class="dropdown-item" href="IniciarSesion.html">Inicia sesión</a>
                          <a class="dropdown-item" href="Registrarse.html">Registrate</a>
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