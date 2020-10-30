import React from "react";
import "./galeria.css"
import foto1 from "../../recursos/foto1.jfif"

const Galeria = ()=>{
    return (
        <section className="Galeria py-5">
            <section className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid" src={foto1} alt=""/>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src={foto1} alt=""/>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src={foto1} alt=""/>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Galeria