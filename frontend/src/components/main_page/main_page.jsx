import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import carouselImg1 from "../../assets/images/carousel-img-1.jpg";
import carouselImg2 from "../../assets/images/carousel-img-2.jpg";
import carouselImg3 from "../../assets/images/carousel-img-3.jpg";
import trail from "../../assets/images/trail.gif";
import { PromiseProvider } from 'mongoose';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let signup_btn = document.getElementsByClassName("signup-btn")[0];
    signup_btn.click();
  }

  render() {
    return (
      <div className="main-page-container">
        <div className="carousel-container">
          {/* <div className="carousel-header-wrapper">
            <div className="carousel-header">
                Plan Your Trip Today
            </div>
          </div> */}
          
          <Carousel className="carousel-content" pause='false'>
            <Carousel.Item interval={3500}>
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
        <section className="main-page-section">
          <h2 className="section-header">Customizable Trail Planner</h2>
          <p className="section-body">Get away from city life by discovering a new adventure. 
              Choose a route from some of the most popular trails in California.</p>
        </section>

        <section className="main-page-section divider d1">
          <h2 className="section-header">Customizable Trail Planner</h2>
        </section>


        {/* <div className="trail-demo-container">
          <img src={trail} className="trail-demo-gif"/>
        </div> */}

        <section className="main-page-section">
          <h2 className="section-header">Plan What You Need for Your Trip</h2>
          <p className="section-body">Do you need trail mix? Multi-tool?
            Or do you need to bring a compass? Decide on your essentials and pack accordingly.
            <br />
            Whatever you need, Nomad takes the stress away from your trip.</p>
        </section>


        <section className="main-page-section divider d2">
          <h2 className="section-header">Customizable Trail Planner</h2>
        </section>


        <section className="main-page-section">
          <h2 id="section-signup-btn" className="section-header" onClick={this.handleClick}>Sign Up</h2>
        </section>

        <section className="main-page-section">
          <div className="section-header">About Us</div>
          <p className="section-body">hi</p>
        </section>


      </div>
    )
  }
}