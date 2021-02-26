import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import carouselImg1 from "../../assets/images/carousel-img-1.jpg";
import carouselImg2 from "../../assets/images/carousel-img-2.jpg";
import carouselImg3 from "../../assets/images/carousel-img-3.jpg";
export default class MainPage extends React.Component {
    render() {
      return (
        <div className="carousel-container">
          {/* <div className="carousel-header-wrapper">
            <div className="carousel-header">
                Plan Your Trip Today
            </div>
          </div> */}
          
          <Carousel className="carousel-content" pause='false'>
            <Carousel.Item interval={3000}>
              <img
                className="carosel-item"
                src={carouselImg1}
                alt='carousel item 1'
              />
              <Carousel.Caption>
                <div className='carousel-caption'>
                  <h1>Discover New Places</h1>
                  <Link className='link' to='/backpack' >Plan Your Next Trip Today.</Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="carosel-item"
                src={carouselImg2}
                alt='carousel item 2'
              />
              <Carousel.Caption>
                <div className='carousel-caption'>
                  <h1>Find A Grand Adventure</h1>
                  <Link className='link' to='/backpack' >Plan Your Next Trip Today.</Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  interval={3000}>
              <img
                className="carosel-item"
                src={carouselImg3}
                alt='carousel item 3'
              />
              <Carousel.Caption>
                <div className='carousel-caption'>
                  <h1>Make Unforgettable Memories</h1>
                  <Link className='link' to='/backpack' >Plan Your Next Trip Today.</Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      )
    }
}