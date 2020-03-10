import React, {Component} from 'react';
import './Hjoes.css';
import HjoesHeader from './HjoesHeader/HjoesHeader';

class Hjoes extends Component {
    

    render(){
        return(
            <div className='hjoes-page'>
                Housing/Job/Other/Emergency-services
                <HjoesHeader/>
            </div>
        )
    }
}

export default Hjoes;