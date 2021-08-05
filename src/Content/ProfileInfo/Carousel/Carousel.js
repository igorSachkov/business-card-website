import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import FirstImage from "./../../images/firstSlide.jpg"
import SecondImage from "./../../images/secondSlide.jpg"
import ThirdImage from "./../../images/thirdSlide.jpg"

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={FirstImage} />
                    <p className="legend">Это я</p>
                </div>
                <div>
                    <img src={SecondImage} />
                    <p className="legend">Омск, берег Иртыша</p>
                </div>
                <div>
                    <img src={ThirdImage} />
                    <p className="legend">Волгоград, берег Волги</p>
                </div>

            </Carousel>
        );
    }
}