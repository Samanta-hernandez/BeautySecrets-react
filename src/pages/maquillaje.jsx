import Menu from "../componentes/Menu";
import Pie from "../componentes/Pie"
import Reproductor from "../recursos/img/ReproductorVideo.png"
import Maquillaje1 from "../recursos/img/Maquillaje1.jpeg"
import Maquillaje2 from "../recursos/img/Maquillaje2.jpeg"
import Maquillaje3 from "../recursos/img/Maquillaje3.jpeg"

function Maquillaje (){
    return(
    <>
    <Menu/>
    <section class="bg-danger-z mt-5">
            <div class="container">
                <div class="row">
                    <div class="col mt-5"><h1>Maquillaje</h1></div>
                </div>
                <div class="row mt-5 pb-sm-5">
                    <div class="col-sm-12 col-md mb-5  ">
                      <img class="w-75 h-100  position-relative i-b"src={Maquillaje1}alt=""/>
                      <img class="position-absolute hp i-a " src={Reproductor} alt=""/>
                    </div>
                    <div class="col">
                        <h3 class="pb-2">Smokey eyes
                        </h3>
                        <p>Aprende a realizar esta técnica de
                            maquillaje de ojos efecto ahumado con colores vivos en tonos calidos y aprende
                            a desvanecer muy bien los colores.</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-12 col-md mb-5">
                      <img class="w-75 h-100 position-relative i-b" src={Maquillaje2} alt=""/>
                      <img class="position-absolute hp i-a " src={Reproductor}  alt=""/>
                    </div>
                    <div class="col">
                        <h3 class="pb-2">Hallo eyes </h3>
                    <p>Aprende a realizar esta técnica de
                        maquillaje de ojos que busca lograr una profundidad en la mirada
                        y resaltar el centro del párpado paso a paso.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md mb-5">
                        <img class="w-75 h-100 position-relative i-b" src={Maquillaje3} alt=""/>
                        <img class="position-absolute hp i-a " src={Reproductor}  alt=""/>
                    </div>
                    <div class="col">
                        <h3 class="pb-2">Cut crease</h3>
                        <p> Aprende a realizar esta técnica de
                            maquillaje de ojos, corte en el
                            párpado con tonos calidos y frios, delineado doble y difuminado en infinito.</p>
                    </div>
                </div>
            </div>
        </section>
    <Pie/>
    </>
    );

}

export default Maquillaje
