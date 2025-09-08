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
                            src="https://vman.com/wp-content/uploads/sites/2/2021/05/V-MAN-Awsten_0163.jpg"
                            alt="A picture of a fashionable man posing for a magazine and heavily accessorized"
                        />
                        <div
                            style={{
                                height: "50px",
                                width: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
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
                        <div
                            style={{
                                height: "50px",
                                width: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
