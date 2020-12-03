import instagram from "../../recursos/images/instagram.png"
import face from "../../recursos/images/facebook.png"
import whatsapp from "../../recursos/images/whatsapp.png"

function Pie (){
    return(
        <section className="pie">
            <div className="container">
                <div className="row mt-4">
                    {/* <!-- nuestra empresa --> */}
                    <div className="col-12 col-md-6 col-lg-3 mb-sm-3">
                        <h6 className="font-weight-bold">NUESTRA EMPRESA</h6>
                        <ul className="list-unstyled cursor">
                            <li className="pb-2"><small>Dudas o Sugerencias</small></li>
                            <li className="pb-2"><small>Contacto</small></li>
                            <li className="pb-2"><small>Política y Privacidad</small></li>
                            <li><small>Terminos de uso</small></li>
                        </ul>
                    </div>
                    {/* <!-- por que elegirnos --> */}
                    <div className="col-12 col-md-6 col-lg-3 mb-sm-3">
                        <h6 className="font-weight-bold">¿POR QUÉ ELEGIRNOS?</h6>
                        <ul className="list-unstyled">
                            <li className="pb-2"><small>Videos y tutoriales de salud y belleza</small></li>
                            <li className="pb-2"><small>Cuidados de tu piel y cabello</small></li>
                            <li className="pb-2"><small>Tips y técnicas de maquillaje</small></li>
                            <li><small>Productos naturales</small></li>
                        </ul>
                    </div>
                    {/* <!-- formulario comentanos --> */}
                    <div className="col-12 col-md-6 col-lg-3 mb-3 mb-sm-3">
                        <form >
                            <h6 className="font-weight-bold">COMÉNTANOS</h6>
                            <div className="form-group">
                                <input type="name" className="form-control x" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" required/>
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control x" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Telefono" required/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control x" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo" required/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control x" id="exampleFormControlTextarea1" rows="3" placeholder="Deja tu mensaje" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-block btn-primary-x ">Enviar</button>
                        </form>
                    </div>
                    {/* <!-- Redes sociales --> */}
                    <div className="col-12 col-md-6 col-lg-3 mb-sm-3">
                    <ul className="list-unstyled cursor">
                        <li className="mb-3 mt-4">
                            <i><img className="redes " src={instagram}/>
                            @beauty_Secrets15</i>
                        </li>
                        <li className="mb-3">
                            <i><img className="redes " src={face} alt=""/> 
                            BeautySecrets</i>               
                        </li>
                        <li>
                            <i><img className="redes" src={whatsapp} alt=""/>
                            3128853246</i>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pie 