import React from 'react';
import debrief from '../images/week1/debrief.png'
import logos from '../images/week1/logos.png'
import branstorm from '../images/week2/brainstorm-doelgroep.png'
import onderzoekdigibeten from '../images/week2/onderzoek-digibeten.png'
import onderzoekondernemers from '../images/week2/onderzoek-ondernemers.png'
import onderzoekminderjarige from '../images/week2/onderzoek-minderjarige.png'
import voortgangsdasboard from '../images/week2/Voortgangs-dashboard.png'
import interviewdigibeten from '../images/week3/interviewdigibeten.png'
import onderzoekbeeldtaal from '../images/week3/onderzoek-beeldtaal.png'
import onderzoekflyer from '../images/week3/onderzoek-flyer.png'
import onderzoekclippy from '../images/week3/onderzoek-clippy.png'
import storyboardsituatie from '../images/week3/storyboardhuidigesituatie.png'
import digisterker from '../images/week3/digisterker.png'
import tussenpresentatie from '../images/week3/tussenpresentatie.png'

import {Card, CardTitle} from 'react-materialize';
import {Container, Row, Col } from "atomize";

class Connect extends React.Component {
    render() {
        return (
            <Container minW="100%" className="Team">
                <Row>
                    <Col size="4">
                        <Card header={<CardTitle reveal image={debrief} waves='light'/>}
                            title="Debrief"
                            reveal={<p>Debriefing van de opdarcht</p>}>
                            <p><a rel="noreferrer" target="_blank" href='https://miro.com/app/board/o9J_lHytuzo=/?moveToWidget=3074457358518768162&cot=14'>Miro</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={logos} waves='light'/>}
                            title="Logos"
                            reveal={<p>Onze logo concepten</p>}>
                            <p><a rel="noreferrer" target="_blank" href="https://miro.com/app/board/o9J_lHytuzo=/?moveToWidget=3074457358080645715&cot=14">Miro</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={branstorm} waves='light'/>}
                            title="Brainstorm"
                            reveal={<p>Brainstorm om een doelgroep te kiezen voor ons concept</p>}>
                            <p><a rel="noreferrer" target="_blank" href="https://miro.com/app/board/o9J_lHytuzo=/?moveToWidget=3074457358597911206&cot=14">Miro</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={onderzoekdigibeten} waves='light'/>}
                            title="Onderzoek Digibeten"
                            reveal={<p>Onderzoek naar digibeten</p>}>
                            <p><a rel="noreferrer" target="_blank" href="https://miro.com/app/board/o9J_lHytuzo=/?moveToWidget=3074457358761457939&cot=14">Miro</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={onderzoekondernemers} waves='light'/>}
                            title="Onderzoek Ondernemers"
                            reveal={<p>Onderzoek naar Ondernemers</p>}>
                            <p><a rel="noreferrer" target="_blank" href="https://miro.com/app/board/o9J_lHytuzo=/?moveToWidget=3074457358818388822&cot=14">Miro</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={onderzoekminderjarige} waves='light'/>}
                            title="Onderzoek Minderjarige"
                            reveal={<p>Onderzoek naar Minderjarige</p>}>
                            <p><a rel="noreferrer" target="_blank" href="https://miro.com/app/board/o9J_lHytuzo=/?moveToWidget=3074457358911222378&cot=14">Miro</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={voortgangsdasboard} waves='light'/>}
                            title="Voortgangs dashboard"
                            reveal={<p>Dit is een tussen presentatie waarbij we een dashboard hebben gebruikt om in kaart te brengen wat we hebben gedaan.</p>}>
                            <p><a rel="noreferrer" target="_blank" href="https://miro.com/app/board/o9J_lHytuzo=/?moveToWidget=3074457359243222533&cot=14">Miro</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={interviewdigibeten} waves='light'/>}
                            title="Interview met digibeten"
                            reveal={<p>Ons eerste interview met een digibeet.</p>}>
                            <p><a rel="noreferrer" target="_blank" href="https://miro.com/app/board/o9J_lHytuzo=/?moveToWidget=3074457360624077900&cot=10">Miro</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={onderzoekbeeldtaal} waves='light'/>}
                            title="Onderzoek beeldtaal"
                            reveal={<p>Dit is een onderzoek naar beeld taal en hoe dat wordt gebruikt bij andere websites.</p>}>
                            <p><a rel="noreferrer" target="_blank" href="https://miro.com/app/board/o9J_lHytuzo=/?moveToWidget=3074457360624257658&cot=10">Miro</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={onderzoekflyer} waves='light'/>}
                            title="Onderzoek Flyer concept"
                            reveal={<p>Dit is een onderzoek naar de skills van digibeten</p>}>
                            <p><a rel="noreferrer" target="_blank" href="https://miro.com/app/board/o9J_lHytuzo=/?moveToWidget=3074457360624258100&cot=10">Miro</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={onderzoekclippy} waves='light'/>}
                            title="Onderzoek Clippy concept"
                            reveal={<p>In dit onderzoek bekijken we of we zelf clippy van microsoft na zouden kunnen maken voor digibeten</p>}>
                            <p><a rel="noreferrer" target="_blank" href="https://miro.com/app/board/o9J_lHytuzo=/?moveToWidget=3074457360624258114&cot=10">Miro</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={storyboardsituatie} waves='light'/>}
                            title="Storyboard huidige situatie"
                            reveal={<p>Dit is een storyboard van de huidige situatie voor digibeten in verband met Mij Loket.</p>}>
                            <p><a rel="noreferrer" target="_blank" href="https://miro.com/app/board/o9J_lHytuzo=/?moveToWidget=3074457359475213178&cot=14">Miro</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={digisterker} waves='light'/>}
                            title="Vragen Digisterker"
                            reveal={<p>Dit zijn vragen voor Digisterker om meer duidelijkheid te krijgen over de doelgroep</p>}>
                            <p><a rel="noreferrer" target="_blank" href="https://miro.com/app/board/o9J_lHytuzo=/?moveToWidget=3074457360624568588&cot=10">Miro</a></p>
                        </Card>
                    </Col>
                    <Col size="4">
                    <Card header={<CardTitle reveal image={tussenpresentatie} waves='light'/>}
                            title="Tussenpresentatie"
                            reveal={<p>Om de tussenpresentatie terug te kijken kan dat door op de miro link te klikken.</p>}>
                            <p><a rel="noreferrer" target="_blank" href="https://miro.com/app/board/o9J_lHytuzo=/?moveToWidget=3074457359697373947&cot=14">Miro</a></p>
                        </Card>
                    </Col>
                </Row>
            </Container>);
        }
}
export default Connect;