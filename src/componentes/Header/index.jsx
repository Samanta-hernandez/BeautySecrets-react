import React from "react";
import "./header.css";

const header = ()=>{
    return (
        <section className="header py-4 bg-dark">
            <section className="container d-flex justify-content-between align-items-center">
                <h1>Logo</h1>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Contac</a>
                </nav>
            </section>
        </section>
    );
}

export default header