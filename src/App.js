import './App.css';
import { Container, Div } from "atomize";
import 'materialize-css';
import { Navbar, Footer } from 'react-materialize';
import Team from './components/team'
import Contact from './components/contact'
import Project from './components/project'
import Banner from './components/banner'
import React from 'react';

function App() {
  return (
    <Div>
      <Navbar fixed centerLogo>
        <a href="#" className="brand-logo center">Logo</a>
        <ul>
          <li><a href="#Team">Team</a></li>
          <li><a href="#Proces">Proces</a></li>
          <li><a href="#Proces">Contact</a></li>
      </ul>
      </Navbar>
      <Banner/>
      <Container className="App">
        <Team/>
        <Project/>
        <Contact/>
      </Container>
      <Footer className="Footer" copyrights="© 2021 Reconnect"></Footer>
    </Div>
  );
}

export default App;
