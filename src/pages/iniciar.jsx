import { Link } from "react-router-dom";
import Logo from "../recursos/images/logo.png"
import Cerrar from "../recursos/images/cerrar.png"
import Tw from "../recursos/images/twitter.png"
import Fc from "../recursos/images/face2.png"
import Go from "../recursos/images/google.png"

function Iniciar (){
    return(
    <section>
    {/* <!-- logo --> */}
    <section className="bg-danger-y">
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <img className="mx-auto mt-5 mb-5" src={Logo} alt=""/>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- bottom cerrar --> */}
    <section className="bg-danger-y">
        <div className="container">
            <div className="row w-50  mx-auto">
                <div className="col ">
                    <Link to="/" className="cursor">
                        <img className="w-25 py-2 mr-0" src={Cerrar} alt=""/>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Form --> */}
    <section className="bg-danger-y">
        <div className="container">
            <div className="row w-50  mx-auto bg-white">
                <div className="col mt-2">
                    <Link to="registrarse" className="btn btn-block btn-primary-y p-3"><h4>Regístrate</h4></Link>
                </div>
                <div className="col mt-2">
                    <Link to="iniciar" className="btn btn-block btn-primary-y p-3"><h4>Iniciar Sesión</h4></Link>
                </div>
            </div>
            <div className="row w-50 mx-auto bg-white">
                <div className="col text-center border-bottom border-dark">
                    <h6 className="my-3 .x">Con tus redes sociales</h6>
                    <img className="mb-3 cursor" src={Tw} alt=""/>
                    <img className="mb-3 cursor" src={Fc} alt=""/>
                    <img className="mb-3 cursor" src={Go} alt=""/>
                </div>
            </div>
            <div className="row w-50 mx-auto bg-white">
                <div className="col mt-4">
                    <form className="mb-3">
                        <div className="form-group ">
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre de Usuario" required/>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" required/>
                          <label className="text-muted cursor" for=""><h6><small>¿Olvidaste tu contraseña?</small></h6></label>
                        </div>
                        <button type="submit" className="btn  btn-block btn-primary-a p-2">Iniciar Sesión</button>
                      </form>
                </div>
            </div>
        </div>
    </section>
    
    {/* <!-- espacio --> */}
    <section className="bg-danger-y" >
        <div className="row">
            <div className="col py-5">
            </div>
        </div>
    </section>
    </section>
    );
}

export default Iniciar
