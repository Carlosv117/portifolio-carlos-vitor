import React, { useEffect, useState } from "react"
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
import { Contact } from "../../Components/Form"
import Aos from "aos"
import "aos/dist/aos.css"
import Projects from "../../Components/ListProjects"
import { listProjects } from "../../db"

const Home = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        Aos.init({duration: 2000})
        setList(listProjects)
    }, [])

    
    return(
        <>
            <Header/>
            <Main>
                <section className="home">
                        <video id="back" src={background} autoPlay loop muted/>
                        <div>
                            <div id="text" data-aos="fade-down">
                                <div className="h1">
                                    <h2>Carlos Vitor Cerqueira</h2>
                                </div>
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
                            <div id="phone" data-aos="fade-up">
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
                    <section className="about">
                        <div className="h1">
                            <h1>Sobre</h1>
                        </div>
                        <div>
                            <div id="video" data-aos="fade-right">
                                <video id="back" src={space} autoPlay loop muted/>
                            </div>
                            <div data-aos="zoom-in">
                                <h2>Carlos Vitor Cerqueira</h2>
                                <p>Estou em busca de um emprego na área de Desenvolvedor e, 
                                    através disso, complementar o que venho aprendendo e evoluir 
                                    na empresa em que estiver atuando e contribuir o máximo possível. 
                                    Sou desenvolvedor Full-stack formado pela Kenzie Academy Brasil.</p>
                                <a href="https://drive.google.com/file/d/1g1MA5Hm6AD3J7koxKlKQypQ49JkwcuDO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    Curriculo
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="tecnologies">
                        <div className="h1">
                            <h1>Tecnologias</h1>
                        </div>
                        <div>
                            <div data-aos="flip-right">
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
                            <div data-aos="flip-left">
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
                        </div>
                    </section>
                    <section className="qualifications">
                        <div className="h1">
                            <h1>Qualificações</h1>
                        </div>
                        <CarroselCertificate/>
                    </section>
                    <section className="projects">
                        <div className="h1">
                            <h1>Projetos</h1>
                        </div>
                        <Projects list={list}/>
                    </section>
                </div>
                <section className="contact">
                    <div className="h1">
                        <h1>Contato</h1>
                    </div>
                    <video id="backContact" src={background} autoPlay loop muted/>
                    <Contact/>
                </section>
            </Main>
            <Footer/>
        </>
    )
}

export default Home