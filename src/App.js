import './App.css';
import { Container, Div } from "atomize";
import 'materialize-css';
import { Navbar, Footer } from 'react-materialize';
import Team from './components/team'
import Contact from './components/contact'
import Project from './components/project'
import Miro from './components/miro'
import Banner from './components/banner'
import React from 'react';
import Logo from "./images/reconnect-logo.png";
import DesignGuidelines from "./components/designGuidelines";

function App() {
  return (
    <Div>
      <Navbar className="green lighten-2" fixed centerLogo>
        <a href="#" className="brand-logo center"><img height="70px" src={Logo}/></a>
        <ul>
          <li><a href="#Team">Team</a></li>
          <li><a href="#Ontwerprichtlijnen">Ontwerprichtlijnen</a></li>
          <li><a href="#Proces">Proces</a></li>
          <li><a href="#Contact">Contact</a></li>
      </ul>
      </Navbar>
      <Banner/>
      <Container className="App">
        <Team/>
        <DesignGuidelines/>
        <Project className="Project"/>
        <Miro/>
        <Contact/>
      </Container>
      <Footer className="Footer green lighten-2" copyrights="© 2021 Reconnect"></Footer>
    </Div>
  );
}

export default App;
