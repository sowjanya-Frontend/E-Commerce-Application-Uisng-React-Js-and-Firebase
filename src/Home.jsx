import React, { Component } from "react";
import CarouselCmp from "./CarouselCmp";
import homeImage from './Images/homeImg.jpg';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <CarouselCmp />
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 homeBottom">
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                    <div class="col-md-4">
                        <div class="ed_box_animado text-center">
                            You Want Clarity
                            <h3 class="ed_title">
                                <img src={homeImage}></img>
                            </h3>
                            <span class="ed_content">
                                See Here!
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 homePageText">
                        <h2> See everything with Clarity </h2>
                        <h6>Buying eyewear should leave you happy and good-looking, with money in your pocket.</h6>
                        <h4 className="txtColor">100% Satisfaction Guaranteed - 30 Day Returns </h4>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 homePageImage">
                        <img src={homeImage}></img>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;