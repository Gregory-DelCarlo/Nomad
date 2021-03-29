import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import angellist from "../../assets/images/angellist.png";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if(this.props.loggedIn) {
      this.props.history.push('/backpack')
    } else  {
      let signup_btn = document.getElementById("signup-btn");
      signup_btn.click();
    }
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
          <h2 className="section-title">Customizable Trail Planner</h2>
          <p className="section-body">Get away from city life by discovering a new adventure. 
              Choose a route from some of the most popular trails in California.</p>
        </section>

        <section className="main-page-section divider d1">
          <h2 className="section-header">Define Your Trip</h2>
        </section>

        <section className="main-page-section section">
          <h2 className="section-title">Plan What You Need for Your Trip</h2>
          <p className="section-body">Do you need trail mix? Multi-tool?
            Or do you need to bring a compass? Decide on your essentials and pack accordingly.
            <br />
            Whatever you need, Nomad takes the stress away from your trip.</p>
        </section>


        <section className="main-page-section divider d2">
          <h2 id="section-signup-btn" className="section-header" onClick={this.handleClick}>Sign Up</h2>
        </section>

        <section className="main-page-section section">
          <h2 className="section-title">Define Your Parameters</h2>
          <p className="section-body">Make your next outdoor trip the best trip ever with Nomad</p>
        </section>

        <section className="main-page-section d3">
          <div className="about-header">
            <h2>About Us</h2>
            <a href="https://github.com/Gregory-DelCarlo/Nomad" target='_blank'>
            <img src={github} class="link-imgs" id="github-link" alt=""/></a>
            <div id='nomad-source'>Nomad source code</div>
          </div>
          <div className="about-footer-container">
              <div className="individual-container">
                <div className="profile">
                  <h3 className="name-header">
                    Ethan
                  </h3>
                  <div className="about-person-img" id="ethan">
                  </div>
                </div>
                <div className="social-links-container">
                  <a href="https://www.linkedin.com/in/gregory-ethan-del-carlo-755852106/" target='_blank'><img src={linkedin} className="link-imgs" alt=""/></a>
                  <a href="https://github.com/Gregory-DelCarlo" target='_blank'><img src={github} className="link-imgs" alt=""/></a>
                  <a href="https://angel.co/u/gregory-del-carlo" target='_blank'><img src={angellist} className="link-imgs" alt=""/></a>
                </div>
              </div>

              <div className="individual-container">
                <div className="profile">
                  <h3 className="name-header">
                    Jeffrey
                  </h3>
                  <div className="about-person-img" id="jeffrey">
                  </div>
                </div>
                <div className="social-links-container">
                  <a href="https://www.linkedin.com/in/jeffrey-bogart-7874121a5/" target='_blank'><img src={linkedin} className="link-imgs" alt=""/></a>
                  <a href="https://github.com/JS-Bogart" target='_blank'><img src={github} className="link-imgs" alt=""/></a>
                  <a href="https://angel.co/u/jeffrey-bogart" target='_blank'><img src={angellist} className="link-imgs" alt=""/></a>
                </div>
              </div>

              <div className="individual-container">
                <div className="profile">
                  <h3 className="name-header">
                    Trevor
                  </h3>
                  <div className="about-person-img" id="trevor">
                  </div>
                </div>
                <div className="social-links-container">
                  <a href="https://www.linkedin.com/in/trevor-smith-4b4b82208/" target='_blank'><img src={linkedin} className="link-imgs" alt=""/></a>
                  <a href="https://github.com/trevorsmith1667" target='_blank'><img src={github} className="link-imgs" alt=""/></a>
                  <a href="https://angel.co/u/trevor-smith-49" target='_blank'><img src={angellist} className="link-imgs" alt=""/></a>
                </div>
              </div>

              <div className="individual-container">
                <div className="profile">
                  <h3 className="name-header">
                    Kenny
                  </h3>
                  <div className="about-person-img" id="kenny">
                  </div>
                </div>
                <div className="social-links-container">
                  {/* <a href="" target='_blank'><img src={linkedin} className="link-imgs" alt=""/></a> */}
                  <a href="https://github.com/LinkedLists" target='_blank'><img src={github} className="link-imgs" alt="" /></a>
                  {/* <a href="" target='_blank'><img src={angellist} className="link-imgs" alt="" /></a> */}
                </div>
              </div>
            </div>
        </section>
      </div>
    )
  }
}