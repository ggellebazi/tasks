import React from "react";
import "./App.css";
import { Button, Row, Container, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is header text</h1>;
            <Container>
                <Row>
                    <Col>
                        <img
                            src="src/assets/tumblr_daa4cf2cf75061b2b82633824baa19a3_2153ae23_1280.jpeg"
                            alt="A picture of a person's pair of boots on a rug with VHS tapes scattered on the floor"
                        />
                        <div className="rectangle"></div>
                        <p>
                            Hello World
                            <br />
                            Izabelle Garcia was here <br />
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                    </Col>
                    <Col>
                        Steps:
                        <ol>
                            <li>Take these vitamins</li>
                            <li>Fake these feelings</li>
                            <li>Yeah, this is how I feel</li>
                        </ol>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <div className="rectangle"></div>
                        document.getElementById("rectangle").style.color =
                        "red";
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
