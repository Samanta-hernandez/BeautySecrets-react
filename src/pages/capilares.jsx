import Menu from "../componentes/Menu";
import Pie from "../componentes/Pie"
import Reproductor from "../recursos/img/ReproductorVideo.png"
import Capilar1 from "../recursos/img/Capilar1.jpg"
import Capilar2 from "../recursos/img/Capilar2.jpg"
import Capilar3 from "../recursos/img/Capilar3.jpg"

function Capilares (){
    return(
    <>
    <Menu/>
    <section class="bg-danger-z mt-5">
        <div class="container">
            <div class="row">
                <div class="col mt-5"><h1>Mascarillas Capilares</h1></div>
            </div>
            <div class="row mt-5 pb-sm-5">
                <div class="col-sm-12 col-md mb-5">
                    <img class="w-75 h-100 position-relative i-b"src={Capilar1} alt=""/>
                    <img class="position-absolute hp i-d " src={Reproductor} alt=""/>
                </div>
                <div class="col">
                    <h3 class="pb-2">Mascarilla de sábila, miel
                        y aceite de coco</h3>
                    <p>Hidrata, ayuda al crecimiento del
                        cabello, combate la caspa, te da
                        brillo y suavidad, repara las puntas
                        abiertas, restaura los daños
                        causados por el sol o el calor y
                        disminuye la caída del cabello.</p>
                </div>
                <div class="row pb-sm-5">
                    <div class="col-sm-12 col-md mb-5">
                        <img class="w-75 h-100 position-relative i-b" src={Capilar2} alt=""/>
                        <img class="position-absolute hp i-d " src={Reproductor} alt=""/>
                    </div>
                    <div class="col">
                        <h3 class="pb-2">Mascarilla de yogurt y
                            limón</h3>
                    <p>Si quieres conseguir un cabello
                        brillante y sano, aplícate esta
                        mascarilla mínimo una vez al mes.
                        Te ayudará a limpiar el cuero
                        cabelludo, potenciando el
                        crecimiento del cabello y la
                        hidratación.</p>
                    </div>
                </div>
                <div class="row pb-sm-5">
                    <div class="col-sm-12 col-md  mb-5">
                        <img class="w-75 h-100 position-relative i-b" src={Capilar3} alt=""/>
                        <img class="position-absolute hp i-d " src={Reproductor} alt=""/>
                    </div>
                    <div class="col">
                        <h3 class="pb-2">Mascarilla para cabello
                            seco y encrespado</h3>
                        <p> Hidrata, nutre y evita el
                            encrespamiento con aguacate y
                            aceite de almendras. El aceite de
                            almendras te ayudará a reparar
                            y el aguacate aportarra mucha
                            hidratación.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <Pie/>

    </>
  
    );
}

export default Capilares