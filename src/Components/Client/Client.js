import React, {Component} from 'react';
import './Client.css'
import ClientHeader from '../ClientHeader/ClientHeader';
import xs from './xs.png';
import axios from 'axios';

import { Link } from 'react-router-dom';

class Client extends Component {
    constructor(){
        super()

        this.state = {
            client:[],
            listOpen: false
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

        console.log(this.state.listOpen)
        let client = this.state.client.map(
            (el,i) => {
            //     let listOpen = false
            //    function handleArrowClick  () {
            //           listOpen = !listOpen
                      
            //       }
            
                return(
                <section>
                    <div className='name-container'>
                        <h1>{el.firstname} {el.lastname}</h1>

                    <section className='drop-x-container'>
                        <Link to={`/info/${el.users1_id}`}>
                        <button>
                            info
                        </button>
                        </Link>


                        <button className='delete'
                        
                        onClick={() => this.deleteClient(el.users1_id)}>
                            <img
                            src={xs}
                            alt='delete'
                            height='17'/>
                        </button>
                    </section> 
                        
                    </div>

         

                </section> 
            )}
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