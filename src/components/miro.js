import React from 'react';
import 'materialize-css';
import { Div, Text } from "atomize";

class Miro extends React.Component {
    render() {
        return (
            <Div minW="100%" className="Team">
                <Text tag="h1" textAlign="center" textSize="display2" m={{ b: "0.5rem", t: "2rem" }}>Team</Text>
                <iframe src="https://miro.com/app/live-embed/o9J_lHytuzo=" height="600" width="100%">
                </iframe>
            </Div>
        );
    } 
}

export default Miro;