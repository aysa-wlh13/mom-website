import React, {Component} from 'react';
import './MedicalHeader.css'
import {Link} from 'react-router-dom';

class MedicalHeader extends Component {
    
    render(){
        return(
            <div className='medical-header-top'>
                MedicalHeader

            <section className='medical-button-container'>
                <Link to='/home'>
                    <button>
                        Home
                    </button>
                </Link>

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

export default MedicalHeader;