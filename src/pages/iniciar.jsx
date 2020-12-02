import Logo from "../recursos/img/logo.png"
import Cerrar from "../recursos/img/cerrar.png"
import Tw from "../recursos/img/twitter.png"
import Fc from "../recursos/img/Facebook2.png"
import Go from "../recursos/img/Google.png"

function Iniciar (){
    return(
    <section>
    {/* <!-- logo --> */}
    <section class="bg-danger-y">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <img class="mx-auto mt-5 mb-5" src={Logo} alt=""/>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- bottom cerrar --> */}
    <section class="bg-danger-y">
        <div class="container">
            <div class="row w-50  mx-auto">
                <div class="col ">
                    <a class="cursor" href="index.html">
                        <img class="w-25 py-2 mr-0" src={Cerrar} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Form --> */}
    <section class="bg-danger-y">
        <div class="container">
            <div class="row w-50  mx-auto bg-white">
                <div class="col mt-2">
                    <a class="btn btn-block btn-primary-y p-3" href="Registrarse.html"><h4>Regístrate</h4></a>
                </div>
                <div class="col mt-2">
                    <a class="btn btn-block btn-primary-y p-3" href="IniciarSesion.html"><h4>Iniciar Sesión</h4></a>
                </div>
            </div>
            <div class="row w-50 mx-auto bg-white">
                <div class="col text-center border-bottom border-dark">
                    <h6 class="my-3 .x">Con tus redes sociales</h6>
                    <img class="mb-3 cursor" src={Tw} alt=""/>
                    <img class="mb-3 cursor" src={Fc} alt=""/>
                    <img class="mb-3 cursor" src={Go} alt=""/>
                </div>
            </div>
            <div class="row w-50 mx-auto bg-white">
                <div class="col mt-4">
                    <form class="mb-3">
                        <div class="form-group ">
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre de Usuario" required/>
                        </div>
                        <div class="form-group">
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" required/>
                          <label class="text-muted cursor" for=""><h6><small>¿Olvidaste tu contraseña?</small></h6></label>
                        </div>
                        <button type="submit" class="btn  btn-block btn-primary-a p-2">Iniciar Sesión</button>
                      </form>
                </div>
            </div>
        </div>
    </section>
    
    {/* <!-- espacio --> */}
    <section class="bg-danger-y" >
        <div class="row">
            <div class="col py-5">
            </div>
        </div>
    </section>
    </section>
    );
}

export default Iniciar
