import Header from "../../Components/Header"
import { Main } from "./styles"
import TypeIt from "typeit-react"
import background from "../../img/backgrounds/background.mp4"
import space from "../../img/backgrounds/spaceLogo.mp4"
import cel from "../../img/icon/Cel.png"
import github from "../../img/icon/github (1).png"
import linkedin from "../../img/icon/linkedin (1).png"
import Footer from "../../Components/Footer"

const Home = () => {
    
    return(
        <>
            <Header/>
            <Main>
                <section id="home">
                    <video id="back" src={background} autoPlay loop muted/>
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
                <section id="about">
                    <div id="video">
                        <video id="back" src={space} autoPlay loop muted/>
                    </div>
                    <div>
                        <span>SOBRE MIM</span>
                        <h1>Carlos Vitor Cerqueira</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nulla lacinia mi sed scelerisque pharetra. Aliquam sit 
                            amet enim quis turpis consectetur euismod. Fusce tincidunt 
                            nulla at ex luctus, non interdum ex feugiat. Duis risus eros,
                             efficitur sit amet erat vitae, hendrerit volutpat dui. 
                             Quisque iaculis metus id</p>
                    </div>
                </section>
            </Main>
            <Footer/>
        </>
    )
}

export default Home