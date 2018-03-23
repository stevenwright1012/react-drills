import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()


    this.state ={
      message: "",
    }
  }
  update(e){
    this.setState({
      message: e,
    });
  }

  render() {
    return (
      <div className="App">
      <input type= "text" onChange={(e) => this.update(e.target.value)}/>
      <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
