import { FooteR } from "./styles"
import github from "../../img/icon/github.png"
import linkedin from "../../img/icon/linkedin.png"

const Footer = () => {

    return(
        <FooteR>
            <div id="icons">
                <figure>
                    <img src={github} alt=""/>
                </figure>
                <h2>&lt;Carlos/Dev&gt;</h2>
                <figure>
                    <img src={linkedin} alt=""/>
                </figure>
            </div>
            <div>
                <p>Construido por Carlos Vitor Cerqueira - 2022 - Todos os direitos reservados&trade;</p>
            </div>
        </FooteR>
    )
}

export default Footer