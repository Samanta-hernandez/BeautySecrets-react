import Recurso1 from "../../recursos/images/recurso1.png"
import Recurso2 from "../../recursos/images/recurso2.png"
import Recurso6 from "../../recursos/images/recurso6.png"
import Recurso7 from "../../recursos/images/recurso7.jpg"
function Ncursos (){
    return(
        <section className="bg-danger-x">
        <div className="container">
            <div className="row ">
                <div className="col-sm-12 col-md-8  mx-auto mt-5">
                    <h1 className="pt-5">Nuestros Cursos</h1>
                    <p>Te brindamos cursos videos tutoriales de belleza y salud facial y capilar, con el fin de 
                    que adquieras conocimiento, lo practiques, te consientas, ahorres dinero y lo más 
                    importante, que estés bella saludablemente.</p>
                </div>
            </div>

            {/* <!-- Carousel --> */}
            <div className="row  mt-3 ">
              <div className="col-sm-12 col-md-6  mx-auto mb-5">
                <div id="carouselExampleCaptions" className="carousel slide mb-5" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={Recurso1} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Maquillaje</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={Recurso2} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Mascarillas Faciales</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={Recurso6} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Peinados</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={Recurso7} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Mascarillas Capilares</h5>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
        </div>
    </section>

    );
}

export default Ncursos