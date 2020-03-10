import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ClientHeader.css';

class ClientHeader extends Component {
    
    render(){
        return(
            <div className='clientHeader-top'>
                ClientHeader
                
            <section className='client-button-container'>
                <Link to='/'>
                    <button>
                        Log Out
                    </button>
                </Link>
            </section>
            </div>
        )
    }
}

export default ClientHeader;