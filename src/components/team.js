import React from 'react';
import 'materialize-css';
import { Div, Container, Row, Col } from "atomize";
import { Card } from 'react-materialize';

class Team extends React.Component {
    render() {
        return (
            <Container minW="100%" className="Team">
                <Row>
                    <Col size="3">
                        <Div>
                            <Card>
                                <div className="card-image">
                                    <img src="https://ccdi-unisg.ch/wp-content/uploads/2019/03/blank-profile-picture-973460_1280-1024x1024.png"/>
                                        <span className="card-title">Ismail</span>
                                </div>
                                <div className="card-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                </div>
                            </Card>
                        </Div>
                    </Col>
                    <Col size="3">
                        <Div>
                            <Card>
                                <div className="card-image">
                                    <img src="https://ccdi-unisg.ch/wp-content/uploads/2019/03/blank-profile-picture-973460_1280-1024x1024.png"/>
                                        <span className="card-title">Timon</span>
                                </div>
                                <div className="card-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                </div>
                            </Card>
                        </Div>
                    </Col>
                    <Col size="3">
                        <Div>
                            <Card>
                                <div className="card-image">
                                    <img src="https://ccdi-unisg.ch/wp-content/uploads/2019/03/blank-profile-picture-973460_1280-1024x1024.png"/>
                                        <span className="card-title">Mio</span>
                                </div>
                                <div className="card-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                </div>
                            </Card>
                        </Div>
                    </Col>
                    <Col size="3">
                        <Div>
                            <Card>
                                <div className="card-image">
                                    <img src="https://ccdi-unisg.ch/wp-content/uploads/2019/03/blank-profile-picture-973460_1280-1024x1024.png"/>
                                        <span className="card-title">Yasmin</span>
                                </div>
                                <div className="card-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                </div>
                            </Card>
                        </Div>
                    </Col>
                </Row>
            </Container>
        );
    } 
}

export default Team;