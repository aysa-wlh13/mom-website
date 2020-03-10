import React, {Component} from 'react';
import './Stripe.css';
import StripeHeader from '../StripeHeader/StripeHeader';

class Stripe extends Component {
    

    render(){
        return(
            <div className='stripe-page'>
                <StripeHeader/>
                Stripe
            </div>
        )
    }
}

export default Stripe;