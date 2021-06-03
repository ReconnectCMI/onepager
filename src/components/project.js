import React from 'react';
import 'materialize-css';
import {Tab, Tabs} from 'react-materialize';

import Connect from "./connect"
import Concept from "./concept"
import Create from "./create"

class Project extends React.Component {
    render() {
        return (
            <Tabs className='tab-demo z-depth-1'>
                <Tab title="Connect"active><Connect/></Tab>
                <Tab title="Concept"><Concept/></Tab>
                <Tab title="Create"><Create/></Tab>
            </Tabs>
        );
    }
}
export default Project