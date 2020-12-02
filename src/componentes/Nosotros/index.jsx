import Samanta from "../../recursos/img/samanta.jpg";
import Jonathan from "../../recursos/img/Jonathan.jpg";

function Nostros (){
    return(
        <section id="quienesSomos" className="bg-danger-y">
        <div className="container">
            <div className="row py-5">
                <div className="col-sm-12 col-md-8 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="mr-auto">¿Quiénes Somos?</h1>
                    <p className="pr-5">	Somos un grupo de jovenes que ofrece mediante una plataforma web,
                        cursos sobre salud y belleza facial y capilar, promovemos que primorice 
                        la salud y los buenos cuidados ya que esto conduce a la belleza. <br/>
                        Generamos buenos hábitos, amor propio y dedicación para la satisfacción  en sí mismo.</p>
                </div>
                <div id="ima" className="col-12 col-md-4 py-5 mr-0">
                    <img className="mb-2 w-100" src={Samanta} alt="" />
                    <img className="w-100" src={Jonathan} alt=""/>
                </div>
            </div>
        </div>
    </section>
  
    );
}

export default Nostros