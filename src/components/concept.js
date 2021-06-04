import React from 'react';

import {Card, CardTitle} from 'react-materialize';
import {Container, Row, Col } from "atomize";
import SlimmeHulp from "../images/concepts/slimme-hulp.png"
import Clippy from "../images/concepts/digiclippy.png"
import Beeldtaal from "../images/concepts/beeldtaal.png"
import FinalConcept from "../images/concepts/final-concept.jpeg"

class Concept extends React.Component {
    render() {
        return (
            <Container minW="100%" className="Team">
                <Row>
                    <Col size="4">
                        <Card header={<CardTitle reveal image={Clippy} waves='light'/>}
                            title="Digi Clippy"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={SlimmeHulp} waves='light'/>}
                            title="Slimme hulp"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={Beeldtaal} waves='light'/>}
                            title="Beeldtaal"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={FinalConcept} waves='light'/>}
                            title="Toegankelijkheid op papier"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </Col>
                </Row>
            </Container>);
        }
}
export default Concept;