import React, {Fragment} from "react";
import Planet from "./planet";

const showMessage= () => {
    console.log("Meu Primeiro evento")
}
//função anonima
const Planets = () => {
    return (
        
        <Fragment>
            <h3>Planet List</h3>
            <button onClick={showMessage}>Show Message</button>
            <hr/>
            <Planet
                name="Mercurio"
                texto="texto aqui"
                img_url="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/3fbe97289a4a39391468549c02ef37b9.jpg"
                link="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/3fbe97289a4a39391468549c02ef37b9.jpg" />
            
        </Fragment>
    )
}

export default Planets