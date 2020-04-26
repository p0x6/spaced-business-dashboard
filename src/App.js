import React, { Component } from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import SectionCards from "./containers/SectionCards";

class App extends Component {
  render() {
    return(
      <Router>
      <div class='spaced-header'>
      <Header />
      <div style={{display: 'flex'}}>
        <div style={{flex: 2}}/>
        <SectionCards />
      </div>
      </div>
      </Router>
    )
  }
}

export default App;
