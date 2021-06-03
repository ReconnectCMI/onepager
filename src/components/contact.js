import React from 'react';
import { Text, Row, Div, Col, Image } from "atomize";
import contactImage from "../images/contact.jpg";
import mio from "../images/mio.png";
import timon from "../images/timon.png";
import yasmin from "../images/yasmin.png";
import ismail from "../images/ismail.png";
import {Collapsible, CollapsibleItem} from 'react-materialize';

class Contact extends React.Component {

    chip(name, image) {
        return(
            <div className="chip">
                <img src={image} alt="Contact Person"/>
                {name}
            </div>
            )
    }
    render() {
        return (
            <Div m={{b:"4rem",}}>

            <Text tag="h1" textAlign="center" textSize="display2" m={{ b: "2rem", t: "2rem" }}>Contact</Text>
            <Row>
                <Col textAlign="left" size="4">
                    <Collapsible accordion defaultActiveKey={1}>
                        <CollapsibleItem header={this.chip("Timon", timon)}>
                            0968794@hr.nl
                        </CollapsibleItem>
                        <CollapsibleItem header={this.chip("Ismail", ismail)}>
                            0964864@hr.nl
                        </CollapsibleItem>
                        <CollapsibleItem header={this.chip("Yasmin", yasmin)}>
                            0863905@hr.nl
                        </CollapsibleItem>
                        <CollapsibleItem header={this.chip("Mio", mio)}>
                            0965579@hr.nl
                        </CollapsibleItem>
                        <CollapsibleItem header='School locatie'>
                            Wijnhaven 107, 3011 WN Rotterdam
                        </CollapsibleItem>
                    </Collapsible>
                </Col>
                <Col size="4">
                    {/* <Div>
                    <Text tag="h3" textAlign="center" textSize="display1" m={{ b: "0", t: "0" }}>Social</Text>
                    </Div>
                    <a className="waves-effect waves-light btn">Github<i className="material-icons left">cloud</i></a> */}
                </Col>
                <Col size="4">
                    <Image src={contactImage}></Image>
                </Col>
            </Row>
            </Div>
        );
    }
}

export default Contact;