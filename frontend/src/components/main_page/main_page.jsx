import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class MainPage extends React.Component {
    render() {
      return (
        <div className="carousel-container">
          <div className="carousel-header-wrapper">
            <div className="carousel-header">
                Plan Your Trip Today
            </div>
          </div>
          
          <Carousel className="carousel-content">
            <Carousel.Item interval={5000}>
              <img
                className="carosel-item"
                src="https://media.tenor.com/images/b143ac6c86210714b4273f28c05f3aa7/tenor.gif"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="carosel-item"
                src="https://media.tenor.com/images/b143ac6c86210714b4273f28c05f3aa7/tenor.gif"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  interval={5000}>
              <img
                className="carosel-item"
                src="https://media.tenor.com/images/b143ac6c86210714b4273f28c05f3aa7/tenor.gif"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      )
    }
}