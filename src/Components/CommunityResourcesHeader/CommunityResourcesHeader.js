import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './CommunityResourcesHeader.css';

class CommunityResourcesHeader extends Component {
    

    render(){
        return(
            <div className='CommunityResourcesHeader-top'>
                CommunityResourcesHeader

            <section className='com-res-button-container'>
                <Link to='/home'>
                    <button>
                        Home
                    </button>
                </Link>

                <Link to='/donate'>
                    <button>
                        Donate
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

export default CommunityResourcesHeader;