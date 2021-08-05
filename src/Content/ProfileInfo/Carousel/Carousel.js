import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import OnePNG from "./../../images/one.jpg"
import TwoPNG from "./../../images/two.jpg"
import ThreePNG from "./../../images/firstSlidePhoto.jpg"

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>

                    <img src={OnePNG} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src={TwoPNG} />

                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src={ThreePNG} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}