import React, {Component} from 'react';
import './MentalHealth.css';
import MentalHealthHeader from './MentalHealthHeader/MentalHealthHeader';

class MentalHealth extends Component {
    

    render(){
        return(
            <div className='mental-health-page'>
                MentalHealth
                <MentalHealthHeader/>
            </div>
        )
    }
}

export default MentalHealth;