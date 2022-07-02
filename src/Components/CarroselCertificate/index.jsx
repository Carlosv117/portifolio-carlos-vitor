import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import frontend from "../../img/certificate/front-end-kenzie.png"
import Aos from "aos"
import "aos/dist/aos.css"

export default function CarroselCertificate() {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    
    return (
        <div data-aos="zoom-in">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
                <div>
                    <img src={frontend} alt="" />
                </div>
                {/* <div>
                    <img src={frontend} alt="" />
                </div> */}
                {/* <div>
                    <img src={frontend} alt="" />
                </div> */}
            </Carousel>
        </div>
    );
}