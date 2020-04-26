import React, { Component } from 'react';
import logo from './logo.png';
import './css/Header.css'

export default class Header extends Component {
  render(){
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='Last-updated'> Last Updated at: </p>
        <p>April 26, 2020 05:30 EST</p>
      </header>
    )
  }
}
