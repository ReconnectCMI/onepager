import React from 'react';
import { Text, Row, Div, Col, Image } from "atomize";
import contactImage from "../images/contact.jpg";

class Contact extends React.Component {
    render() {
        return (
            <Div m={{b:"4rem",}}>

            <Text tag="h1" textAlign="center" textSize="display2" m={{ b: "2rem", t: "2rem" }}>Contact</Text>
            <Row>
                <Col textAlign="left" size="4">email: 0965579@hr.nl</Col>
                <Col size="4"></Col>
                <Col size="4">
                    <Image src={contactImage}></Image>
                </Col>
            </Row>
            </Div>
        );
    }
}

export default Contact;