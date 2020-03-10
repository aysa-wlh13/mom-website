import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './StripeHeader.css';

class StripeHeader extends Component {
    

    render(){
        return(
            <div className='StripeHeader-top'>
                StripeHeader

            <section className='stripe-button-container'>
                <Link to='/home'>
                    <button>
                        Home
                    </button>
                </Link>

                <Link to='/com-res'>
                    <button>
                        Community Resources
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

export default StripeHeader;