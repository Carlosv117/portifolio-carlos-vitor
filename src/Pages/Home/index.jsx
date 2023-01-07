import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Main } from "./styles";
import TypeIt from "typeit-react";
import background from "../../img/backgrounds/background.mp4";
import space from "../../img/backgrounds/spaceLogo.mp4";
import cel from "../../img/icon/Cel.png";
import github from "../../img/icon/github (1).png";
import linkedin from "../../img/icon/linkedin (1).png";
import front from "../../img/icon/front.png";
import back from "../../img/icon/back.png";
import Footer from "../../Components/Footer";
import CarroselCertificate from "../../Components/CarroselCertificate";
import { Contact } from "../../Components/Form";
import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "../../Components/ListProjects";
import { listProjects } from "../../db";

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    setList(listProjects);
  }, []);

  return (
    <>
      <Header />
      <Main>
        <section className="home">
          <video id="back" src={background} autoPlay loop muted />
          <div>
            <div id="text" data-aos="fade-down">
              <div className="h1">
                <h2>Carlos Vitor Cerqueira</h2>
              </div>
              <TypeIt
                options={{ loop: true }}
                getBeforeInit={(instance) => {
                  instance
                    .type("Desenvolvedor Front-end.")
                    .pause(1000)
                    .delete(24)
                    .type("Desenvolvedor Back-end.")
                    .pause(1000)
                    .delete(23)
                    .type("Desenvolvedor Full-stack.")
                    .pause(1000)
                    .delete(25);
                  return instance;
                }}
              />
            </div>
            <div id="phone" data-aos="fade-up">
              <figure>
                <img src={cel} alt="icon phone" />
              </figure>
              <div>
                <figure>
                  <a
                    href="https://github.com/Carlosv117"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={github} alt="icon github" />
                  </a>
                </figure>
                <figure>
                  <a
                    href="https://www.linkedin.com/in/carlosvitorcerqueira"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={linkedin} alt="icon linkedin" />
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
                <video id="back" src={space} autoPlay loop muted />
              </div>
              <div data-aos="zoom-in">
                <h2>Carlos Vitor Cerqueira</h2>
                <p>
                  Desenvolvedor Full Stack (+1 ano)
                  <br />
                  Trabalhei em vários projetos como Desenvolvedor, sendo que em
                  alguns deles eu fui o principal responsável.
                  <br />
                  Sempre interessado em criar um código muito compreensível e
                  funcional.
                  <br />
                  Apaixonado por aprender novas tecnologias e trabalhos
                  desafiadores, assim como ensinar e ajudar minha equipe.
                </p>
                <a
                  href="https://drive.google.com/file/d/1W2CWcjlp0b48a8g8IcCRzKip5GQLnjnx/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                  <img src={front} alt="icon front-end" />
                </figure>
                <h3>Front-end</h3>
                <span>React</span>
                <span>Javascript</span>
                <span>Typescript</span>
                <span>API REST</span>
                <span>Logic Apps</span>
                <span>SPFx (Sharepoint Framework)</span>
              </div>
              <div data-aos="flip-left">
                <figure>
                  <img src={back} alt="icon back-end" />
                </figure>
                <h3>Back-end</h3>
                <span>Node</span>
                <span>Python</span>
                <span>Django</span>
                <span>Docker</span>
                <span>Express</span>
                <span>PostgreSQL</span>
              </div>
            </div>
          </section>
          <section className="qualifications">
            <div className="h1">
              <h1>Qualificações</h1>
            </div>
            <CarroselCertificate />
          </section>
          <section className="projects">
            <div className="h1">
              <h1>Projetos</h1>
            </div>
            <Projects list={list} />
          </section>
        </div>
        <section className="contact">
          <div className="h1">
            <h1>Contato</h1>
          </div>
          <video id="backContact" src={background} autoPlay loop muted />
          <Contact />
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
