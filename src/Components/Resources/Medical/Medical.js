import React, {Component} from 'react';
import './Medical.css'
import MedicalHeader from './MedicalHeader/MedicalHeader';

class Medical extends Component {
    

    render(){
        return(
            <div className='medical-page'>
                Medical
                <MedicalHeader/>
            </div>
        )
    }
}

export default Medical;