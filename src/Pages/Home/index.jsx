import Header from "../../Components/Header"
import { Main } from "./styles"
import TypeIt from "typeit-react"
import background from "../../img/backgrounds/background.mp4"
import space from "../../img/backgrounds/spaceLogo.mp4"
import cel from "../../img/icon/Cel.png"
import github from "../../img/icon/github (1).png"
import linkedin from "../../img/icon/linkedin (1).png"
import front from "../../img/icon/front.png"
import back from "../../img/icon/back.png"
import Footer from "../../Components/Footer"
import CarroselCertificate from "../../Components/CarroselCertificate"
import CarroselProjects from "../../Components/CarroselProjects"
import { Contact } from "../../Components/Form"

const Home = () => {
    
    return(
        <>
            <Header/>
            <Main>
                
                <section id="home">
                        <video id="back" src={background} autoPlay loop muted/>
                        <div>
                            <div id="text">
                                <h2>Carlos Vitor Cerqueira</h2>
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
                <div>
                    <section id="about">
                        <h1>Sobre</h1>
                        <div id="video">
                            <video id="back" src={space} autoPlay loop muted/>
                        </div>
                        <div>
                            <h2>Carlos Vitor Cerqueira</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nulla lacinia mi sed scelerisque pharetra. Aliquam sit 
                                amet enim quis turpis consectetur euismod. Fusce tincidunt 
                                nulla at ex luctus, non interdum ex feugiat. Duis risus eros,
                                efficitur sit amet erat vitae, hendrerit volutpat dui. 
                                Quisque iaculis metus id</p>
                        </div>
                    </section>
                    <section id="tecnologies">
                        <h1>Tecnologias</h1>
                        <div>
                            <figure>
                                <img src={front} alt=""/>
                            </figure>
                            <h3>Front-end</h3>
                            <span>React</span>
                            <span>Javascript</span>
                            <span>Typescript</span>
                            <span>API REST</span>
                            <span>HTML5</span>
                            <span>CSS3</span>
                        </div>
                        <div>
                            <figure>
                                <img src={back} alt=""/>
                            </figure>
                            <h3>Back-end</h3>
                            <span>Python</span>
                            <span>Node</span>
                            <span>Express</span>
                            <span>Django</span>
                            <span>PostgreSQL</span>
                            <span>Docker</span>
                        </div>
                    </section>
                    <section id="qualifications">
                        <h1>Qualificações</h1>
                        <CarroselCertificate/>
                    </section>
                    <section id="projects">
                        <h1>Projetos</h1>
                        <CarroselProjects/>
                    </section>
                </div>
                <section id="contact">
                    <h1>Contato</h1>
                    <Contact/>
                </section>
            </Main>
            <Footer/>
        </>
    )
}

export default Home