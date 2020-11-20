import Recurso1 from "../../recursos/img/Recurso1.png"
import Recurso2 from "../../recursos/img/Recurso2.png"
import Recurso6 from "../../recursos/img/Recurso6.png"
import Recurso7 from "../../recursos/img/Recurso7.jpg"
function Ncursos (){
    return(
        <section className="bg-danger-x">
        <div class="container">
            <div class="row ">
                <div class="col-sm-12 col-md-8  mx-auto mt-5">
                    <h1 class="pt-5">Nuestros Cursos</h1>
                    <p>Te brindamos cursos videos tutoriales de belleza y salud facial y capilar, con el fin de 
                    que adquieras conocimiento, lo practiques, te consientas, ahorres dinero y lo más 
                    importante, que estés bella saludablemente.</p>
                </div>
            </div>

            {/* <!-- Carousel --> */}
            <div class="row  mt-3 ">
              <div class="col-sm-12 col-md-6  mx-auto mb-5">
                <div id="carouselExampleCaptions" class="carousel slide mb-5" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={Recurso1} class="d-block w-100" alt="..."/>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Maquillaje</h5>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src={Recurso2} class="d-block w-100" alt="..."/>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Mascarillas Faciales</h5>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src={Recurso6} class="d-block w-100" alt="..."/>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Peinados</h5>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src={Recurso7} class="d-block w-100" alt="..."/>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Mascarillas Capilares</h5>
                      </div>
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
        </div>
    </section>

    );
}

export default Ncursos