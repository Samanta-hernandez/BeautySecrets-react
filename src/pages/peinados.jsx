import Menu from "../componentes/Menu";
import Pie from "../componentes/Pie"
import Reproductor from "../recursos/img/ReproductorVideo.png"
import Peinado1 from "../recursos/img/Peinado1.jpeg"
import Peinado2 from "../recursos/img/Peinado2.jpg"
import Peinado3 from "../recursos/img/Peinado3.jpg"

function Peinados (){
    return(
    <>
    <Menu/>
    <section class="bg-danger-y mt-5">
            <div class="container">
                <div class="row">
                    <div class="col mt-5"><h1>Peinados</h1></div>
                </div>
                <div class="row mt-5 pb-sm-5">
                    <div class="col-sm-12 col-md mb-5">
                        <img class="w-75 h-100 position-relative i-b"src={Peinado1} alt=""/>
                        <img class="position-absolute hp i-d " src={Reproductor} alt=""/>
                    </div>
                    <div class="col">
                        <h3 class="pb-2">Trenzas africanas
                        </h3>
                        <p>Aprende a realizar estas trenzas
                            africanas paso a paso de una
                            forma fácil y sencilla.</p>
                    </div>
                </div>
                <div class="row pb-sm-5">
                    <div class="col-sm-12 col-md mb-5">
                        <img class="w-75 h-100 position-relative i-b" src={Peinado2} alt=""/>
                        <img class="position-absolute hp i-d " src={Reproductor} alt=""/>
                    </div>
                    <div class="col">
                        <h3 class="pb-2">Recogido con trenza </h3>
                    <p>Una gran opción para peinado
                        de boda.
                        Fácil y sencillo, te mostraremos
                        el paso a paso.</p>
                    </div>
                </div>
                <div class="row pb-sm-5">
                    <div class="col-sm-12 col-md mb-5">
                        <img class="w-75 h-100 position-relative i-b" src={Peinado3} alt=""/>
                        <img class="position-absolute hp i-d " src={Reproductor} alt=""/>
                    </div>
                    <div class="col">
                        <h3 class="pb-2">Trenza espina de pescado</h3>
                        <p> Fácil trenza de espina de pescado,
                            peinado sencillo para el día a día.</p>
                    </div>
                </div>
            </div>
        </section>
    <Pie/>
    </>
    );
}

export default Peinados