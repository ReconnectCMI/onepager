import React from 'react';
import 'materialize-css';
import { Div, Text } from "atomize";
import {Tab, Tabs} from 'react-materialize';

import Connect from "./connect"
import Concept from "./concept"
import Create from "./create"
import Insights from "./insights"

class Project extends React.Component {
    render() {
        return (
            <Div>
                <Text tag="h1" textAlign="center" textSize="display2" m={{ b: "0.5rem", t: "2rem" }}>Proces</Text>
                {/* <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/> */}
            <Tabs className='tab-demo z-depth-0'>
                <Tab title="Connect"><Connect/></Tab>
                <Tab title="Inzichten"><Insights/></Tab>
                <Tab title="Concept"active><Concept/></Tab>
                <Tab title="Create"><Create/></Tab>
            </Tabs>
            </Div>
        );
    }
}
export default Project