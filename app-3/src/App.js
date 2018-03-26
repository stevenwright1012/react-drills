import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state= {
      filterString: [],
      list: ["stuff", "things", "other stuff", "hobbit", "harry potter", "ukulele"],
    }
  }

  filterList(e){
    this.setState({
      filterString: e,
      });
  }
  
  render() {
    let newList = this.state.list.filter((val) =>{
      if(val.includes(this.state.filterString)){
        return val;
      }
    })
    let displayList = newList.map((val,i) => {
      return <h2 key = {i}>{val}</h2>
    })
    return (
      <div className="App">
      <input type="text" 
      onChange={(e) => this.filterList(e.target.value)}/>
      {displayList}
      </div>
    );
  }
}

export default App;
