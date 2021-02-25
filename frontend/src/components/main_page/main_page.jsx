import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class MainPage extends React.Component {
    render() {
        return (
            <div className="carousel-container">
                <div className="carousel-header">
                    Plan Your Trip Today
                </div>
                <Carousel>
                <Carousel.Item interval={2500}>
                  <img
                    className="carosel-item"
                    src="https://media.tenor.com/images/b143ac6c86210714b4273f28c05f3aa7/tenor.gif"
                  />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                  <img
                    className="carosel-item"
                    src="https://media.tenor.com/images/b143ac6c86210714b4273f28c05f3aa7/tenor.gif"
                  />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  interval={2500}>
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