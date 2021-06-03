import React from 'react';
import 'materialize-css';
import { Div } from "atomize";
import {Tab, Tabs} from 'react-materialize';

import Connect from "./connect"
import Concept from "./concept"
import Create from "./create"

class Project extends React.Component {
    render() {
        return (
            <Div>
                {/* <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/> */}
            <Tabs className='tab-demo z-depth-1'>
                <Tab title="Connect"active><Connect/></Tab>
                <Tab title="Concept"><Concept/></Tab>
                <Tab title="Create"><Create/></Tab>
            </Tabs>
            </Div>
        );
    }
}
export default Project