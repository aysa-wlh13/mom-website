import React, {Component} from 'react';
import './HjoesHeader.css'
import {Link} from 'react-router-dom';

class HjoesHeader extends Component {
    
    render(){
        return(
            <div className='hjoes-header-top'>
                HjoesHeader

            <section className='hjoes-button-container'>
                <Link to='/home'>
                    <button>
                        Home
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

export default HjoesHeader;