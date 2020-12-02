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
    <section className="bg-danger-y mt-5">
            <div className="container">
                <div className="row">
                    <div className="col mt-5"><h1>Peinados</h1></div>
                </div>
                <div className="row mt-5 pb-sm-5">
                    <div className="col-sm-12 col-md mb-5">
                        <img className="w-75 h-100 position-relative i-b"src={Peinado1} alt=""/>
                        <img className="position-absolute hp i-d " src={Reproductor} alt=""/>
                    </div>
                    <div className="col">
                        <h3 className="pb-2">Trenzas africanas
                        </h3>
                        <p>Aprende a realizar estas trenzas
                            africanas paso a paso de una
                            forma fácil y sencilla.</p>
                    </div>
                </div>
                <div className="row pb-sm-5">
                    <div className="col-sm-12 col-md mb-5">
                        <img className="w-75 h-100 position-relative i-b" src={Peinado2} alt=""/>
                        <img className="position-absolute hp i-d " src={Reproductor} alt=""/>
                    </div>
                    <div className="col">
                        <h3 className="pb-2">Recogido con trenza </h3>
                    <p>Una gran opción para peinado
                        de boda.
                        Fácil y sencillo, te mostraremos
                        el paso a paso.</p>
                    </div>
                </div>
                <div className="row pb-sm-5">
                    <div className="col-sm-12 col-md mb-5">
                        <img className="w-75 h-100 position-relative i-b" src={Peinado3} alt=""/>
                        <img className="position-absolute hp i-d " src={Reproductor} alt=""/>
                    </div>
                    <div className="col">
                        <h3 className="pb-2">Trenza espina de pescado</h3>
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