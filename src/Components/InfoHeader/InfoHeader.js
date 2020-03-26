import React, {Component} from 'react';
import './InfoHeader.css'
import {Link} from 'react-router-dom';

class InfoHeader extends Component {
    

    render(){
        return(
            <div className='info-top'>
                InfoHeader

            <section className='info-button-container'>
                <Link to='/client'>
                    <button>
                        Client
                    </button>
                </Link>

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

export default InfoHeader;