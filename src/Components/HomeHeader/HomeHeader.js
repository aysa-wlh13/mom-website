import React, {Component} from 'react';
import './HomeHeader.css'
import {Link} from 'react-router-dom';

class HomeHeader extends Component {
    

    render(){
        return(
            <div className='home-top'>
                HomeHeader

            <section className='home-button-container'>
                <Link to='/com-res'>
                    <button>
                        Community Resources
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

export default HomeHeader;