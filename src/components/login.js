import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            username:'',
            password:'',
            users:[],
            uservalidate:true
            
        }
    }

    componentWillMount(){
        this.getAllUsers()
    }

    getAllUsers=()=>{
        axios.get('http://localhost:3000/userdetails')
                .then(response=>{
                    this.setState({users: response.data})
                    console.log(this.state.users);
                }, error=>{
                    console.error(error);
                })
    }

    getUsername=(event)=>{
        this.setState({username: event.target.value})
    }

    getPassword=(event)=>{
        this.setState({password: event.target.value})
    }

    validateUser=()=>{
        if(JSON.stringify(this.state.username)===''||JSON.stringify(this.state.password)===''){
            alert("Please enter username/password")
        }else{
            let i=0;
            let allUsers=this.state.users
            for(i=0;i<this.state.users.length;i++){
                if(JSON.stringify(this.state.username)===JSON.stringify(allUsers[i].username)&&
                JSON.stringify(this.state.password)===JSON.stringify(allUsers[i].password)){
                         this.props.history.push('/home')
                     }else{
                         this.setState({uservalidate: false})
                           }

            }
            if(!this.state.uservalidate){
                alert("username/password incorrect")
            }

        }
    }

    render() { 
        return (
            <div className="loginForm">
                <form>
                <div className="row">
                <label className="col formLabel" >Username: </label>
                <input className="col formInput" type='text' id="username" onChange={this.getUsername}></input>
                </div>
                <div className="row">
                <label  className="col formLabel">Password: </label>
                <input  className="col formInput" type='password' id="password" onChange={this.getPassword}></input>
                </div>
                <div className="row">
                <button className="btn btn-primary loginBtn" onClick={this.validateUser}>Submit</button>
                </div>
                <br></br>
                <Link to='/signup'>Sign Up</Link>
                </form>
            </div>
          );
    }
}
 
export default Login;