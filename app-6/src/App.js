import React, { Component } from 'react';
import './App.css';
import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super()

    this.state = {
      userInput: '',
      listItems: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(e){
    this.setState({
      userInput: e.target.value,
    })    
  }
  handleClick(){
    var newList = this.state.listItems.splice(0);
    newList.push(this.state.userInput)
    this.setState({
      listItems: newList,
      userInput: '',
    })
  }
  render() {
    return (
      <div className="App">
      <h1>My to-do list:</h1>
      <input type="text" 
      placeholder="New task" 
      onChange={this.handleChange} 
      value={this.state.userInput}/>
      <button onClick={this.handleClick}>Add to list</button>
      <Todo list={this.state.listItems}/>
      </div>
    );
  }
}

export default App;
