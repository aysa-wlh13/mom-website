import React, {Component} from 'react';
import './Education.css';
import EducationHeader from './EducationHeader/EducationHeader'

class Education extends Component {
    

    render(){
        return(
            <div className='education-page'>
                Education
                <EducationHeader/>
            </div>
        )
    }
}

export default Education;