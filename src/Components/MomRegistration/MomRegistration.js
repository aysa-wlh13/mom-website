import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//redux
import {updateUser} from '../../redux/reducer';
import {connect} from 'react-redux';


class MomRegistration extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleTherapistRegistration = () => {
        axios.post('auth/therapistRegister', {username: this.state.username, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName}).then(res => {
            this.setState ({
                username: '',
                password: '',
                firstName: '',
                lastName: ''
            })
            //redux
            this.props.updateUser(res.data)
            this.props.history.push('/client')
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                MomRegistration
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

                <Link to='/'>
                    <button>
                        Sign in
                    </button>
                </Link>
                
                <button onClick={this.handleTherapistRegistration}>Register</button>
            </div>
        )
    }
}

export default connect(null, {updateUser})(MomRegistration);