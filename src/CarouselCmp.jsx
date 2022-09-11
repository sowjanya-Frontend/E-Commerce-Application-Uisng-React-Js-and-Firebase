import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import bannerImg1 from './Images/baner1.png';
import bannerImg2 from './Images/baner4.png';
import bannerImg3 from './Images/ban6.png';
/**
 * @description: to implement the corosel component
 * @return: corosol component
 * @param void
 * @author: Sowjanya Kandra
 * @required: carouselCmp.jsx
*/
class CarouselCmp extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="carouselMainDiv">
          <div>
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bannerImg1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5>GUCCI</h5>
                  <p>We have a huge range of products which are available for you to try. Finding the perfect frame has never been so easy!</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bannerImg2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>OAKLEY</h5>
                  <p>
                    There’s a shade for every mood and every moment. Find yours.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bannerImg3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>CARTIER</h5>
                  <p>Choose your range. What ever your budget or occasion.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

      </React.Fragment>
    )
  }
}
export default CarouselCmp;