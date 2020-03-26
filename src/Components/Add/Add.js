import React, {Component} from 'react';
import axios from "axios";


class Add extends Component {
    constructor() {
        super()

        this.state = {
            info: ''
        }
    }

    //handle input
    handleInput(prop, value) {
        this.setState({
          [prop]: value
        });
      }

    //add
    addInfo = () => {
        const {
            info
        } = this.state;
        axios
        .post('/api/addInfo', {
            info
        })
        .then(res => {
            this.getInfo();
        })
    }


    render(){
        return(
            <div>
                Add
            </div>
        )
    }
}

export default Add;