import Header from "../../Components/Header"
import { Main } from "./styles"
import background from "../../img/backgrounds/background.mp4"
import TypeIt from "typeit-react"
// import {useNavigate} from "react-router-dom"
import cel from "../../img/icon/Cel.png"
import github from "../../img/icon/github (1).png"
import linkedin from "../../img/icon/linkedin (1).png"
import { Link } from "react-router-dom"

const Home = () => {

    // const navigate = useNavigate()
    
    return(
        <>
            <Header/>
            <Main>
                <section id="home">
                    <video id="back" src={background} autoPlay loop preload="auto"/>
                    <div>
                        <div id="text">
                            <h1>Carlos Vitor Cerqueira</h1>
                            <TypeIt
                                options={{loop: true}}
                                getBeforeInit={(instance) => {
                                    instance.type("Desenvolvedor Front-end.")
                                    .pause(1000).delete(24)
                                    .type("Desenvolvedor Back-end.")
                                    .pause(1000).delete(23)
                                    .type("Desenvolvedor Full-stack.")
                                    .pause(1000).delete(25)
                                    return instance
                                }}
                            />
                        </div>
                        <div id="phone">
                            <figure>
                                <img src={cel} alt=""/>
                            </figure>
                            <div>
                                <figure>
                                    <a href="https://github.com/Carlosv117" rel="noreferrer" target="_blank">
                                        <img src={github} alt=""/>
                                    </a>
                                </figure>
                                <figure>
                                    <a href="https://www.linkedin.com/in/carlosvitorcerqueira" rel="noreferrer" target="_blank">
                                        <img src={linkedin} alt=""/>
                                    </a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
            </Main>
        </>
    )
}

export default Home