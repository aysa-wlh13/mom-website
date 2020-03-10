import React, {Component} from 'react';
import './Eyes.css';
import EyesHeader from './EyesHeader/EyesHeader';

class Eyes extends Component {
    

    render(){
        return(
            <div className='eyes-page'>
                Eyes
                <EyesHeader/>
            </div>
        )
    }
}

export default Eyes;