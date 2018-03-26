import React, { Component } from 'react';
import './App.css';
import Image from './Components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Image src ="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8cfec93c89f00ae9bbc2e96a0e4bbd01&auto=format&fit=crop&w=1450&q=80"/>
      </div>
    );
  }
}

export default App;
