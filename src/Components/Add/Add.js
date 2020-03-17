import React, {Component} from 'react';

class Add extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    //handle input
    handleInput(prop, value) {
        this.setState({
          [prop]: value
        });
      }

    //add


    render(){
        return(
            <div>
                Add
            </div>
        )
    }
}

export default Add;