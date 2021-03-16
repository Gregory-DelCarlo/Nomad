import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import carouselImg1 from "../../assets/images/carousel-img-1.jpg";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import angellist from "../../assets/images/angellist.png";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";

import carouselImg2 from "../../assets/images/carousel-img-2.jpg";
import carouselImg3 from "../../assets/images/carousel-img-3.jpg";
// import trail from "../../assets/images/trail.gif";

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
          <Carousel className="carousel-content" pause='false'>
            <Carousel.Item interval={3500}>
              <img
                className="carosel-item"
                src={img1}
                // src={carouselImg1}
                alt='carousel item 1'
              />
              <Carousel.Caption>
                <div className='carousel-caption'>
                  <h1>Discover New Places</h1>
                  <div className='link' onClick={this.handleClick} >Plan Your Next Trip Today.</div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="carosel-item"
                src={img2}
                // src={carouselImg2}
                alt='carousel item 2'
              />
              <Carousel.Caption>
                <div className='carousel-caption'>
                  <h1>Find A Grand Adventure</h1>
                  <div className='link' onClick={this.handleClick} >Plan Your Next Trip Today.</div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  interval={3000}>
              <img
                className="carosel-item"
                src={img3}
                // src={carouselImg3}
                alt='carousel item 3'
              />
              <Carousel.Caption>
                <div className='carousel-caption'>
                  <h1>Make Unforgettable Memories</h1>
                  <div className='link' onClick={this.handleClick} >Plan Your Next Trip Today.</div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <section className="main-page-section section">
          <h2 className="section-header">Customizable Trail Planner</h2>
          <p className="section-body">Get away from city life by discovering a new adventure. 
              Choose a route from some of the most popular trails in California.</p>
        </section>

        <section className="main-page-section divider d1">
          <h2 className="section-header">Define Your Trip</h2>
        </section>


        {/* <div className="trail-demo-container">
          <img src={trail} className="trail-demo-gif"/>
        </div> */}

        <section className="main-page-section section">
          <h2 className="section-header">Plan What You Need for Your Trip</h2>
          <p className="section-body">Do you need trail mix? Multi-tool?
            Or do you need to bring a compass? Decide on your essentials and pack accordingly.
            <br />
            Whatever you need, Nomad takes the stress away from your trip.</p>
        </section>


        <section className="main-page-section divider d2">
          <h2 id="section-signup-btn" className="section-header" onClick={this.handleClick}>Sign Up</h2>
        </section>

        <section className="main-page-section section">
          <h2 className="section-header">Define Your Parameters</h2>
          <p className="section-body">Make your next outdoor trip the best trip ever with Nomad</p>
        </section>

        <section className="main-page-section d3">
          <div className="about-header">About Us</div>

          <div className="about-footer-container">
            <div className="about-person-container">
              <div className="individual-container">
                <h3 className="name-header">
                  Ethan
                </h3>
                <div className="about-person-img" id="ethan">
                </div>
                <div classname="social-links-container">
                  <a href="google.com"><img src={angellist} class="link-imgs" /></a>
                  <a href="google.com"><img src={github} class="link-imgs" /></a>
                  <a href="google.com"><img src={linkedin} class="link-imgs" /></a>
                </div>
              </div>

              <div className="individual-container">
                <h3 className="name-header">
                  Jeffrey
                </h3>
                <div className="about-person-img" id="jeffrey">
                </div>
                <div classname="social-links-container">
                  <a href="google.com"><img src={angellist} class="link-imgs" /></a>
                  <a href="google.com"><img src={github} class="link-imgs" /></a>
                  <a href="google.com"><img src={linkedin} class="link-imgs" /></a>
                </div>
              </div>

              <div className="individual-container">
                <h3 className="name-header">
                  Trevor
                </h3>
                <div className="about-person-img" id="trevor">
                </div>
                <div classname="social-links-container">
                  <a href="google.com"><img src={angellist} class="link-imgs" /></a>
                  <a href="google.com"><img src={github} class="link-imgs" /></a>
                  <a href="google.com"><img src={linkedin} class="link-imgs" /></a>
                </div>
              </div>

              <div className="individual-container">
                <h3 className="name-header">
                  Kenny
                </h3>
                <div className="about-person-img" id="kenny">
                </div>
                <div classname="social-links-container">
                  <a href="google.com"><img src={angellist} class="link-imgs" /></a>
                  <a href="google.com"><img src={github} class="link-imgs" /></a>
                  <a href="google.com"><img src={linkedin} class="link-imgs" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    )
  }
}