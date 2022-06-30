import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import frontend from "../../img/certificate/front-end-kenzie.png"

export default function CarroselCertificate() {
    
    return (
        <div>
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