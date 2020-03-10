import React, {Component} from 'react';
import './Dental.css'
import DentalHeader from './DentalHeader/DentalHeader';

class Dental extends Component {
    
    render(){
        return(
            <div className='dental-page'>
                Dental
                <DentalHeader/>
            </div>
        )
    }
}

export default Dental;