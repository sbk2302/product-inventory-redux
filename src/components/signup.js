import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            firstname:'',
            lastname:'',
            username:'',
            password:''
            
        }
    }

    getFirstName=(event)=>{
        this.setState({firstname: event.target.value})
    }

    getLastName=(event)=>{
        this.setState({lastname: event.target.value})
    }

    getEmail=(event)=>{
        this.setState({username: event.target.value})
    }

    getPassword=(event)=>{
        this.setState({password: event.target.value})
    }

    addUser=()=>{
        console.log('Add user via axios and post')
        let userRequestBody = {
            "firstname":this.state.firstname,
            "lastname": this.state.lastname,
            "username": this.state.username,
            "password": this.state.password
        }
        axios.post('http://localhost:3000/userdetails', userRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/')
                }, error=>{
                    console.error(error);
                })
    }

    render() { 
        return ( 
            <div className="signupForm">
            <h3>Sign up</h3>
            <form>
                <div className="row">
                <label className=" col formLabel">First Name </label>
                <input className="col formInput" type='text' id="firstname" onChange={this.getFirstName}></input>
                </div>
                <div className="row">
                <label className=" col formLabel">Last Name </label>
                <input  className=" col formInput" type='text' id="lastname" onChange={this.getLastName}></input>
                </div>
                <div className="row">
                <label className=" col formLabel">Email</label>
                <input className=" col formInput" type='email' id="email" onChange={this.getEmail}></input>
                </div>
                <div className="row">
                <label className=" col formLabel">Password</label>
                <input className=" col formInput" type='password' id="password" onChange={this.getPassword}></input>
                </div>
                <div className="row">
                <button type="button" className="btn btn-primary loginBtn" onClick={this.addUser}>Sign Up</button>
                <br></br>
                </div>
            </form>
        </div>
         );
    }
}
 
export default SignUp;