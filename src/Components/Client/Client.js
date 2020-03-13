import React, {Component} from 'react';
import './Client.css'
import ClientHeader from '../ClientHeader/ClientHeader';
import dropDownArrow from './dropDownArrow.png';
import axios from 'axios';

import Info from '../Info/Info';

class Client extends Component {
    constructor(){
        super()

        this.state = {
            client:[]
        }
    }

    componentDidMount(){
        this.getClients();
    }



    getClients = () => {
        axios.get('/api/getClients').then(res => {
            this.setState({
                client: res.data
            })
            console.log(res.data)
        })
    }

    render(){
        console.log(this.state.client)
        let client = this.state.client.map(
            (el,i) => (
                <section>
                    <div className='name-container'>
                        <h1>{el.firstname} {el.lastname}</h1>
                        <button
                        onClick={() => {}}
                        className='dropDownArrow-style'>
                            <img 
                            src={dropDownArrow}
                            alt='dropDownArrow'
                            height='17'/>
                        </button>
                    </div>
                    <Info users1_id = {el.users1_id}/>
                </section> 
            )
        )

        return(
            <div className='Client-page'>
                <ClientHeader/>
                {client}
            </div>
        )
    }
}

export default Client;