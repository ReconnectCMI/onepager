import React from 'react';

import {Card, CardTitle} from 'react-materialize';
import {Container, Row, Col } from "atomize";
import github from '../images/github/githuborg.png';
import githubonepager from '../images/github/githubonepager.png';
import githubprototype from '../images/github/githubprototype.png';
import flyer from '../images/create/flyerfinal.png';
import prototype from '../images/create/prototypepagina.png';

class Create extends React.Component {
    render() {
        return (
            <Container minW="100%" className="Team">
                <Row>
                <Col size="4">
                        <Card header={<CardTitle reveal image={prototype} waves='light'/>}
                            title="Prototype"
                            reveal={<p>Dit is het prototype</p>}>
                            <p><a rel="noreferrer" target="_blank" href='https://reconnectcmi.github.io/search-bar/'>Prototype</a></p>
                        </Card>
                    </Col>
                <Col size="4">
                        <Card header={<CardTitle reveal image={flyer} waves='light'/>}
                            title="Flyer"
                            reveal={<p>Dit is de flyer die iedereen krijgt om hulp te krijgen bij het gebruik van Mijn Loket.</p>}>
                            <p><a rel="noreferrer" target="_blank" href='https://miro.com/app/board/o9J_lHytuzo=/?moveToWidget=3074457360625339334&cot=10'>Miro</a></p>
                        </Card>
                    </Col>
                <Col size="4">
                        <Card header={<CardTitle reveal image={githubprototype} waves='light'/>}
                            title="Github Prototype"
                            reveal={<p>Dit is de github pagina van het prototype.</p>}>
                            <p><a rel="noreferrer" target="_blank" href='https://github.com/ReconnectCMI/search-bar'>Github</a></p>
                        </Card>
                    </Col>
                <Col size="4">
                        <Card header={<CardTitle reveal image={githubonepager} waves='light'/>}
                            title="Onepager"
                            reveal={<p>Dit is de github pagina van de onepager.</p>}>
                            <p><a rel="noreferrer" target="_blank" href='https://github.com/ReconnectCMI/onepager'>Github</a></p>
                        </Card>
                    </Col>
                <Col size="4">
                        <Card header={<CardTitle reveal image={github} waves='light'/>}
                            title="Github"
                            reveal={<p>Dit is onze organisatie pagina van github</p>}>
                            <p><a rel="noreferrer" target="_blank" href='https://github.com/ReconnectCMI'>Github</a></p>
                        </Card>
                    </Col>
                </Row>
            </Container>);
        }
}
export default Create;