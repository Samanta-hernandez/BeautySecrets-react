import Menu from "../componentes/Menu";
import Pie from "../componentes/Pie"
import Reproductor from "../recursos/img/ReproductorVideo.png"
import Capilar1 from "../recursos/img/Capilar1.jpg"
import Capilar2 from "../recursos/img/Capilar2.jpg"
import Capilar3 from "../recursos/img/Capilar3.jpg"

function Capilares() {
    return (
        <>
            <Menu />
            <section className="bg-danger-z mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col mt-5"><h1>Mascarillas Capilares</h1></div>
                    </div>
                    <div className="row mt-5 pb-sm-5">
                        <div className="col-sm-12 col-md mb-5">
                            <img className="w-75 h-100 position-relative i-b" src={Capilar1} alt="" />
                            <img className="position-absolute hp i-d " src={Reproductor} alt="" />
                        </div>
                        <div className="col">
                            <h3 className="pb-2">Mascarilla de sábila, miel
                        y aceite de coco</h3>
                            <p>Hidrata, ayuda al crecimiento del
                            cabello, combate la caspa, te da
                            brillo y suavidad, repara las puntas
                            abiertas, restaura los daños
                            causados por el sol o el calor y
                        disminuye la caída del cabello.</p>
                        </div>
                        <div className="row pb-sm-5">
                            <div className="col-sm-12 col-md mb-5">
                                <img className="w-75 h-100 position-relative i-b" src={Capilar2} alt="" />
                                <img className="position-absolute hp i-d " src={Reproductor} alt="" />
                            </div>
                            <div className="col">
                                <h3 className="pb-2">Mascarilla de yogurt y
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
                        <div className="row pb-sm-5">
                            <div className="col-sm-12 col-md  mb-5">
                                <img className="w-75 h-100 position-relative i-b" src={Capilar3} alt="" />
                                <img className="position-absolute hp i-d " src={Reproductor} alt="" />
                            </div>
                            <div className="col">
                                <h3 className="pb-2">Mascarilla para cabello
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
            <Pie />
        </>

    );
}

export default Capilares