import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import uBeer from "../../img/projects/uBeer.png"
import OnganizerApi from "../../img/projects/Onganizer-api.png"
import KenzieHub from "../../img/projects/KenzieHub.png"
import NuKenzie from "../../img/projects/NuKenzie.png"
import BurguerKenzie from "../../img/projects/BurguerKenzie.png"
import KenziePet from "../../img/projects/KenziePet.png"
import KMDB from "../../img/projects/KMDB.png"

export default function CarroselProjects() {
    
    return (
        <div>
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
                <div>
                    <a href="https://github.com/Carlosv117/ubeer" target="_blank" rel="noopener noreferrer">
                        <img src={uBeer} alt="" />
                    </a>
                    <p className="legend">uBeer</p>
                </div>
                <div>
                    <a href="https://github.com/Carlosv117/onganizer-api" target="_blank" rel="noopener noreferrer">
                        <img src={OnganizerApi} alt="" />
                    </a>
                    <p className="legend">Onganizer Api</p>
                </div>
                <div>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-carlosv117" target="_blank" rel="noopener noreferrer">
                        <img src={KenzieHub} alt="" />
                    </a>
                    <p className="legend">Kenzie Hub</p>
                </div>
                <div>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-carlosv117" target="_blank" rel="noopener noreferrer">
                        <img src={NuKenzie} alt="" />
                    </a>
                    <p className="legend">Nu Kenzie</p>
                </div>
                <div>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/m5-sprint4-kmdb-Carlosv117" target="_blank" rel="noopener noreferrer">
                        <img src={KMDB} alt="" />
                    </a>
                    <p className="legend">KMDB</p>
                </div>
                <div>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-carlosv117" target="_blank" rel="noopener noreferrer">
                        <img src={BurguerKenzie} alt="" />
                    </a>
                    <p className="legend">Burguer Kenzie</p>
                </div>
                <div>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/m5-sprint3-kenzie-pet-Carlosv117" target="_blank" rel="noopener noreferrer">
                        <img src={KenziePet} alt="" />
                    </a>
                    <p className="legend">Kenzie Pet</p>
                </div>
            </Carousel>
        </div>
    );
}