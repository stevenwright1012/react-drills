import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      list:["cookies", "candy", "chocolate"]
    }
  }
  render() {
    let list = this.state.list.map((val, i) =>{
      return(<div>
      <input type="checkbox"/> 
      <h2>{val}</h2>
      </div>
      )
    })
    return (
      <div className="App">
      {list}
      </div>
    );
  }
}

export default App;
