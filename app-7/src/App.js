import React, { Component } from 'react';
import './App.css';
import List from './Components/List';
import NewTask from './Components/NewTask';

class App extends Component {
  constructor(){
    super()

    this.state = {
      taskArr: [],
    }
    this.addTask = this.addTask.bind(this)
  }
  addTask(val){
    var newList = this.state.taskArr.slice(0);
    newList.push(val)
    this.setState({
      taskArr: newList,
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.addTask}/>
        <List list={this.state.taskArr}/>
      </div>
    );
  }
}

export default App;
