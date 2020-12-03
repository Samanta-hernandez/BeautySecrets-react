import Menu from "../componentes/Menu";
import Pie from "../componentes/Pie"
import Reproductor from "../recursos/images/reproductorVideo.png"
import Maquillaje1 from "../recursos/images/maquillaje1.jpeg"
import Maquillaje2 from "../recursos/images/maquillaje2.jpeg"
import Maquillaje3 from "../recursos/images/maquillaje3.jpeg"

function Maquillaje (){
    return(
    <>
    <Menu/>
    <section className="bg-danger-z mt-5">
            <div className="container">
                <div className="row">
                    <div className="col mt-5"><h1>Maquillaje</h1></div>
                </div>
                <div className="row mt-5 pb-sm-5">
                    <div className="col-sm-12 col-md mb-5  ">
                      <img className="w-75 h-100  position-relative i-b"src={Maquillaje1}alt=""/>
                      <img className="position-absolute hp i-a " src={Reproductor} alt=""/>
                    </div>
                    <div className="col">
                        <h3 className="pb-2">Smokey eyes
                        </h3>
                        <p>Aprende a realizar esta técnica de
                            maquillaje de ojos efecto ahumado con colores vivos en tonos calidos y aprende
                            a desvanecer muy bien los colores.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md mb-5">
                      <img className="w-75 h-100 position-relative i-b" src={Maquillaje2} alt=""/>
                      <img className="position-absolute hp i-a " src={Reproductor}  alt=""/>
                    </div>
                    <div className="col">
                        <h3 className="pb-2">Hallo eyes </h3>
                    <p>Aprende a realizar esta técnica de
                        maquillaje de ojos que busca lograr una profundidad en la mirada
                        y resaltar el centro del párpado paso a paso.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md mb-5">
                        <img className="w-75 h-100 position-relative i-b" src={Maquillaje3} alt=""/>
                        <img className="position-absolute hp i-a " src={Reproductor}  alt=""/>
                    </div>
                    <div className="col">
                        <h3 className="pb-2">Cut crease</h3>
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
