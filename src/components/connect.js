import React from 'react';

import {Card, CardTitle} from 'react-materialize';
import {Container, Row, Col } from "atomize";

class Connect extends React.Component {
    render() {
        return (
            <Container minW="100%" className="Team">
                <Row>
                    <Col size="4">
                        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Connect"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Connect"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
                            title="Connect"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </Col>
                </Row>
            </Container>);
        }
}
export default Connect;