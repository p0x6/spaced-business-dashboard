import React, { Component } from 'react';
import Container from "react-bootstrap/Container"
import Header from './Header';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import SectionCards from "./containers/SectionCards";
import Sidebar from "./components/Sidebar";

import "./App.css";

const Main = () => {
  return (
    <Container fluid style={{display: 'flex'}}>
    <div style={{flex: 2}}/>  

      <SectionCards />
    </Container>
  )
}

class App extends Component {

  render() {
    return(
      <Router>
      <div class='spaced-header'>
      <Header />
      <Sidebar />
      <Main />
      </div>
        <footer>© Spaced | 2020</footer>
      </Router>
    )
  }
}

export default App;
