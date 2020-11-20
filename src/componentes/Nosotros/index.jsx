import Samanta from "../../recursos/samanta.jpg";
import Jonathan from "../../recursos/Jonathan.jpg";

function Nostros (){
    return(
        <section id="quienesSomos" class="bg-danger-y">
        <div class="container">
            <div class="row py-5">
                <div class="col-sm-12 col-md-8 d-flex flex-column justify-content-center align-items-center">
                    <h1 class="mr-auto">¿Quiénes Somos?</h1>
                    <p class="pr-5">	Somos un grupo de jovenes que ofrece mediante una plataforma web,
                        cursos sobre salud y belleza facial y capilar, promovemos que primorice 
                        la salud y los buenos cuidados ya que esto conduce a la belleza. <br/>
                        Generamos buenos hábitos, amor propio y dedicación para la satisfacción  en sí mismo.</p>
                </div>
                <div id="ima" class="col-12 col-md-4 py-5 mr-0">
                    <img class="mb-2 w-100" src={Samanta} alt="" />
                    <img class="w-100" src={Jonathan} alt=""/>
                </div>
            </div>
        </div>
    </section>
  
    );
}

export default Nostros