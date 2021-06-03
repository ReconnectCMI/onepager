import './App.css';
import { Container, Div } from "atomize";
import 'materialize-css';
import { Navbar, Footer } from 'react-materialize';
import Team from './components/team'
import Project from './components/project'
import Banner from './components/banner'
import React from 'react';

function App() {
  return (
  <Div>
    <Navbar centerLogo>
      <a href="#" className="brand-logo center">Logo</a>
      <ul>
        <li><a href="#Team">Team</a></li>
        <li><a href="#Concepten">Concepten</a></li>
        <li><a href="#Stappen">Stappen</a></li>
        <li><a href="#Proces">Proces</a></li>
    </ul>
    </Navbar>
    <Container className="App">
      <Banner/>
      <Team/>
      <Project/>
    </Container>
    <Footer copyrights="© 2021 Reconnect" />
    </Div>
  );
}

export default App;
