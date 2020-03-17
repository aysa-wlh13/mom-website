import React, {Component} from 'react';
import './Client.css'
import ClientHeader from '../ClientHeader/ClientHeader';
import dropDownArrow from './dropDownArrow.png';
import xs from './xs.png';
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

    //update


    //delete
    deleteClient = id => {
        axios.delete(`/api/deleteInfo/${id}`).then(res => {
            this.getClients();
        })
    }

    render(){
        console.log(this.state.client)
        let client = this.state.client.map(
            (el,i) => (
                <section>
                    <div className='name-container'>
                        <h1>{el.firstname} {el.lastname}</h1>

                    <section className='drop-x-container'>
                        <button
                        onClick={() => {}}
                        className='dropDownArrow-style'>
                            <img 
                            src={dropDownArrow}
                            alt='dropDownArrow'
                            height='17'/>
                        </button>

                        <button className='delete'
                        
                        onClick={() => this.deleteClient(el.users1_id)}>
                            <img
                            src={xs}
                            alt='delete'
                            height='17'/>
                        </button>
                    </section> 
                        
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