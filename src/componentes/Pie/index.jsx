import instagram from "../../recursos/img/instagram.png"
import face from "../../recursos/img/facebook.png"
import whatsapp from "../../recursos/img/whatsapp.png"

function Pie (){
    return(
        <section className="pie">
            <div class="container">
                <div class="row mt-4">
                    {/* <!-- nuestra empresa --> */}
                    <div class="col-12 col-md-6 col-lg-3 mb-sm-3">
                        <h6 class="font-weight-bold">NUESTRA EMPRESA</h6>
                        <ul class="list-unstyled cursor">
                            <li class="pb-2"><small>Dudas o Sugerencias</small></li>
                            <li class="pb-2"><small>Contacto</small></li>
                            <li class="pb-2"><small>Política y Privacidad</small></li>
                            <li><small>Terminos de uso</small></li>
                        </ul>
                    </div>
                    {/* <!-- por que elegirnos --> */}
                    <div class="col-12 col-md-6 col-lg-3 mb-sm-3">
                        <h6 class="font-weight-bold">¿POR QUÉ ELEGIRNOS?</h6>
                        <ul class="list-unstyled">
                            <li class="pb-2"><small>Videos y tutoriales de salud y belleza</small></li>
                            <li class="pb-2"><small>Cuidados de tu piel y cabello</small></li>
                            <li class="pb-2"><small>Tips y técnicas de maquillaje</small></li>
                            <li><small>Productos naturales</small></li>
                        </ul>
                    </div>
                    {/* <!-- formulario comentanos --> */}
                    <div class="col-12 col-md-6 col-lg-3 mb-3 mb-sm-3">
                        <form >
                            <h6 class="font-weight-bold">COMÉNTANOS</h6>
                            <div class="form-group">
                                <input type="name" class="form-control x" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" required/>
                            </div>
                            <div class="form-group">
                                <input type="tel" class="form-control x" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Telefono" required/>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control x" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo" required/>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control x" id="exampleFormControlTextarea1" rows="3" placeholder="Deja tu mensaje" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-block btn-primary-x ">Enviar</button>
                        </form>
                    </div>
                    {/* <!-- Redes sociales --> */}
                    <div class="col-12 col-md-6 col-lg-3 mb-sm-3">
                    <ul class="list-unstyled cursor">
                        <li class="mb-3 mt-4">
                            <i><img class="redes " src={instagram}/>
                            @beautySecrets</i>
                        </li>
                        <li class="mb-3">
                            <i><img class="redes " src={face} alt=""/> 
                            BeautySecrets</i>               
                        </li>
                        <li>
                            <i><img class="redes" src={whatsapp} alt=""/>
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