import React from 'react';
import 'materialize-css';
import { Div, Row, Col, Text } from "atomize";
import { Card } from 'react-materialize';

class DesignGuidelines extends React.Component {
    render() {
        return (
            <Div minW="100%" className="Ontwerprichtlijnen">
                <Text tag="h1" textAlign="center" textSize="display2" m={{ b: "0.5rem", t: "2rem" }}>Ontwerprichtlijnen</Text>
                <Row>
                    <Col size="6">
                        <Div>
                            <Card title="Het concept moet ervoor zorgen dat een digibeet moet worden herkend en erkend door de Gemeente Rotterdam" className='z-depth-0'></Card>
                        </Div>
                    </Col>
                    <Col size="6">
                        <Div>
                            <Card title="Het concept moet ervoor zorgen dat digibeten geholpen kunnen worden ongeacht wat de reden is" className='z-depth-0'></Card>
                        </Div>
                    </Col>
                    <Col size="6">
                        <Div>
                            <Card title="Het concept moet binnen verschillende diensten van de Gemeente Rotterdam geïmplementeerd kunnen worden" className='z-depth-0'></Card>
                        </Div>
                    </Col>
                    <Col size="6">
                        <Div>
                            <Card title="Het concept moet ervoor zorgen dat alle digibeten zelf hun burgerzaken regelen zonder hulp van anderen" className='z-depth-0'></Card>
                        </Div>
                    </Col>
                </Row>
            </Div>
        );
    } 
}

export default DesignGuidelines;