import React, { Component } from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return(
      <Router>
      <div class='spaced-header'>
      <Header />
      </div>
      </Router>
    )
  }
}

export default App;
