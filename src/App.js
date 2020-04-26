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
      <SectionCards />
      </div>
      </Router>
    )
  }
}

export default App;
