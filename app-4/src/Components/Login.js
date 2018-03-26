import React, {Component} from 'react';


class Login extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            password: '',
        }
        this.alertLogin = this.alertLogin.bind(this);
        this.changeUsername= this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    alertLogin(){
        alert(`Loging in user: ${this.state.username} with password: ${this.state.password}`)
    }
    changeUsername(e){
        this.setState({
            username: e.target.value,
        })
    }
    changePassword(e){
        this.setState({
            password: e.target.value,
        })
    }
    render(){
        return (
            <div>
                <input type="text" onChange={this.changeUsername} placeholder='Username'/>
                <input type="text" onChange={this.changePassword} placeholder="Password"/>
                <button onClick={this.alertLogin}>Login</button>
            </div>
        )
    }
}
export default Login