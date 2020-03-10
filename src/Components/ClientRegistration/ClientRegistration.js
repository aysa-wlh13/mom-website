import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ClientRegistration extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            therapist: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClientRegister = () => {
        axios.post('/auth/clientRegister', {username: this.state.username, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, therapist: this.state.therapist}).then(res => {
            this.state = {
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                therapist:''
            }
            this.props.history.push('/home')
        })
        .catch(err => console.log(err))
    }
    

    render(){
        return(
            <div>
                ClientRegistration
                <p>Username:</p>
                <input
                value={this.state.username}
                name='username'
                onChange={(e) => this.handleInput(e)}/>

                <p>Password:</p>
                <input
                type='password'
                value={this.state.password}
                name='password'
                onChange={(e) => this.handleInput(e)}/>

                <p>First Name:</p>
                <input
                value={this.state.firstName}
                name='firstName'
                onChange={(e) => this.handleInput(e)}/>

                <p>Last Name:</p>
                <input
                value={this.state.lastName}
                name='lastName'
                onChange={(e) => this.handleInput(e)}/>

                <p>Therapist:</p>
                <input
                value={this.state.therapist}
                name='therapist'
                onChange={(e) => this.handleInput(e)}/>

                <Link to='/m-register'>
                    <button>
                        Therapist Register
                    </button>
                </Link>

                <button onClick={this.handleClientRegister}>Register</button>

                <Link to='/'>
                    <button>
                        Sign in
                    </button>
                </Link>

            </div>
        )
    }
}

export default ClientRegistration;