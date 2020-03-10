import React, {Component} from 'react';
import './Client.css'
import ClientHeader from '../ClientHeader/ClientHeader';

class Client extends Component {
    

    render(){
        return(
            <div className='Client-page'>
                <ClientHeader/>
                Client
            </div>
        )
    }
}

export default Client;