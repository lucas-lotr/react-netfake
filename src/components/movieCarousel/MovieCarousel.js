import React from "react";
import "./MovieCarousel.css";
import { Col, Carousel } from "react-bootstrap";

class MovieCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null
        };
    }

    handleSelect(selectedIndex, e) {
        //alert(`selected=${selectedIndex}, direction=${e.direction}`);
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                <Carousel.Item className="carousel-big-item">
                    <img
                        alt="900x500"
                        src="https://via.placeholder.com/1500x500?text=Filme+1"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-big-item">
                    <img
                        width={900}
                        height={500}
                        alt="900x500"
                        src="https://via.placeholder.com/1500x500?text=Filme+2"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-big-item">
                    <img
                        width={900}
                        height={500}
                        alt="900x500"
                        src="https://via.placeholder.com/1500x500?text=Filme+3"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default MovieCarousel;
