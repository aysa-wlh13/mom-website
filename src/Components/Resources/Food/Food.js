import React, {Component} from 'react';
import './Food.css';
import FoodHeader from './FoodHeader/FoodHeader';

class Food extends Component {
    

    render(){
        return(
            <div className='food-page'>
                Food
                <FoodHeader/>
            </div>
        )
    }
}

export default Food;