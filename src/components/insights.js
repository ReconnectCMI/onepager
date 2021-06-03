import React from 'react';
import 'materialize-css';
import { Div, Row, Col } from "atomize";
import { Card } from 'react-materialize';

class Insights extends React.Component {
    render() {
        return (
            <Div minW="100%" className="Insights">
                <Row>
                    <Col size="4">
                        <Div>
                            <Card title="Digibeet: iemand die niet weet hoe om te gaan met een device" className='z-depth-0'></Card>
                        </Div>
                    </Col>
                    <Col size="4">
                        <Div>
                            <Card title="2,5 miljoen Nederlanders zijn digibeet" className='z-depth-0'></Card>
                        </Div>
                    </Col>
                    <Col size="4">
                        <Div>
                            <Card title="Senioren, mensen met een licht verstandelijke beperking, analfabeten, laag inkomen en praktisch opgeleiden" className='z-depth-0'></Card>
                        </Div>
                    </Col>
                    <Col size="4">
                        <Div>
                            <Card title="In een steeds meer groeiende digitale samenleving groeit ook het gevoel van eenzaamheid, schulden, problemen op de arbeidsmarkt" className='z-depth-0'></Card>
                        </Div>
                    </Col>
                    <Col size="4">
                        <Div>
                            <Card title="Sommige digibeten kunnen wel heel goed met bepaalde devices omgaan" className='z-depth-0'></Card>
                        </Div>
                    </Col>
                    <Col size="4">
                        <Div>
                            <Card title="Overheid zet steeds meer in op digitalisering, hierdoor komt de privacy van digibeten onderdruk te staan" className='z-depth-0'></Card>
                        </Div>
                    </Col>
                </Row>
            </Div>
        );
    } 
}

export default Insights;