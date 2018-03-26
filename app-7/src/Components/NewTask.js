import React, {Component}from 'react';

class NewTask extends Component{
    constructor(){
        super()

        this.state ={
            userInput: ''
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
        console.log(this.state.userInput);
        this.props.add(this.state.userInput);
        this.setState({
          userInput: '',
        }) 
      }
    render(){
        return (
            <div>         
                <input type="text"
                placeholder="New Task"
                value={this.state.userInput}
                onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Add Task</button>
            </div>
        )
    }
}
export default NewTask;