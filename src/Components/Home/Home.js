import React, {Component} from 'react';
import './Home.css'
import HomeHeader from '../HomeHeader/HomeHeader';

class Home extends Component {
    

    render(){
        return(
            <div className='home-page'>
                <HomeHeader/>
                Home
            </div>
        )
    }
}

export default Home;