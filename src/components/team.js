import React from 'react';
import 'materialize-css';
import mio from "../images/mio.png";
import timon from "../images/timon.png";
import yasmin from "../images/yasmin.png";
import ismail from "../images/ismail.png";
import { Div, Row, Col, Text } from "atomize";
import { Card } from 'react-materialize';

class Team extends React.Component {
    render() {
        return (
            <Div minW="100%" className="Team">
                <Text tag="h1" textAlign="center" textSize="display2" m={{ b: "0.5rem", t: "2rem" }}>Team</Text>
                <Row>
                    <Col size="3">
                        <Div>
                            <Card>
                                <div className="card-image">
                                    <img src={ismail}/>
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
                                    <img src={timon}/>
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
                                    <img src={mio}/>
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
                                    <img src={yasmin}/>
                                        <span className="card-title">Yasmin</span>
                                </div>
                                <div className="card-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                </div>
                            </Card>
                        </Div>
                    </Col>
                </Row>
            </Div>
        );
    } 
}

export default Team;