import Fondo2 from "../../recursos/Fondo2.jpg";

function Inicio (){
    return(
        <section className="sec1" class=" text-body-x mt-5 over">
            <img src={Fondo2} class="card-img" alt=""></img>
            <div className="container">
                <div className="row">
                    <div className="col card-img-overlay">
                    <h1 class=" mt-md-5 p-x card-title ">Bienvenida...</h1>
                    <p class="pl card-text ">Somos Beauty Secrets, nos encargamos <br/>
                    de ofrecerte belleza y bienestar.</p>
                    </div>
                </div>
            </div>
        </section>
  
    );
}

export default Inicio