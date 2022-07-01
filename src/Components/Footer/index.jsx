import { FooteR } from "./styles"
import github from "../../img/icon/github.png"
import linkedin from "../../img/icon/linkedin.png"

const Footer = () => {

    return(
        <FooteR>
            <div id="icons">
                <figure>
                    <a href="https://github.com/Carlosv117" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt=""/>
                    </a>
                </figure>
                <h2>&lt;Carlos/Dev&gt;</h2>
                <figure>
                    <a href="https://www.linkedin.com/in/carlosvitorcerqueira" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt=""/>
                    </a>
                </figure>
            </div>
            <div>
                <p>Construido por Carlos Vitor Cerqueira - 2022 - Todos os direitos reservados&trade;</p>
            </div>
        </FooteR>
    )
}

export default Footer