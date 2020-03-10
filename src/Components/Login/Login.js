import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//redux
import {connect} from 'react-redux';
import {updateUser} from '../../redux/reducer';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLogin = () => {
        axios.post('/auth/login', {username: this.state.username, password: this.state.password}).then(res => {
            this.setState({
                username: '',
                password: ''
            })

            //redux
            this.props.updateUser(res.data)
            
            if(this.props.reducer.user.is_admin === true){
                this.props.history.push('/client')
            }else{
                this.props.history.push('/home')
            }
        })
        .catch(err => console.log(err))
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    

    render(){
        return(
            <div>
                Login
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

                <Link to='/c-register'>
                    <button>
                        Register
                    </button>
                </Link>

                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {updateUser})(Login);