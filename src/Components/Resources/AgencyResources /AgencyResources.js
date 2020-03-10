import React, {Component} from 'react';
import './AgencyResources.css';
import AgencyResourcesHeader from './AgencyResourcesHeader/AgencyResourcesHeader'

class AgencyResources extends Component {
    
    render(){
        return(
            <div className='agency-resources-page'>
                <AgencyResourcesHeader/>
                AgencyResources 
            </div>
        )
    }
}

export default AgencyResources ;