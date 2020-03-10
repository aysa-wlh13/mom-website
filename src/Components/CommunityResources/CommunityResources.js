import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './CommunityResources.css';
import CommunityResourcesHeader from '../CommunityResourcesHeader/CommunityResourcesHeader';

class CommunityResources extends Component {
    

    render(){
        return(
            <div className='community-resources-page'>
                
                <CommunityResourcesHeader/>
                CommunityResources

                <Link to='/agency-res'>
                    <button>
                        Agency Resources
                    </button>
                </Link>

                <Link to='/dental'>
                    <button>
                        Dental
                    </button>
                </Link>

                <Link to='/education'>
                    <button>
                        Education
                    </button>
                </Link>

                <Link to='/eyes'>
                    <button>
                        Eyes
                    </button>
                </Link>

                <Link to='/food'>
                    <button>
                        Food
                    </button>
                </Link>

                <Link to='/hjoes'>
                    <button>
                        Housing, Job, Other, Emergency services
                    </button>
                </Link>

                <Link to='/medical'>
                    <button>
                        Medical
                    </button>
                </Link>

                <Link to='/mental-health'>
                    <button>
                        Mental Health
                    </button>
                </Link>
            </div>
        )
    }
}

export default CommunityResources;