import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid, Row, Col } from "react-bootstrap";
import MovieCarousel from "./components/movieCarousel/MovieCarousel";

class App extends Component {
    submitSearch = event => {
        event.preventDefault();
        alert("submitted search: " + event.target.pesquisa.value);
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Row>
                        <Col xs={1} sm={1} md={1} lg={1} className="logo">
                            <img src={logo} className="App-logo" alt="logo" />
                        </Col>
                        <Col
                            xsOffset={4}
                            smOffset={6}
                            mdOffset={8}
                            lgOffset={8}
                            className="search"
                        >
                            <form onSubmit={this.submitSearch}>
                                <input
                                    type="text"
                                    name="pesquisa"
                                    placeholder="pesquisar..."
                                />
                                <input type="submit" name="pesquisar" />
                            </form>
                        </Col>
                    </Row>
                </header>
                <MovieCarousel />
            </div>
        );
    }
}

export default App;
