import React, {Component} from 'react';
import './Info.css';
import axios from 'axios';


class Info extends Component {
    constructor(){
        super()

        this.state = {
            info:[]
        }
    }

    componentDidMount(){
        this.getInfo(this.props.users1_id);
    }

    getInfo = (id) => {
        axios.get(`/api/getInfo/${id}`).then(res => {
            this.setState({
                info: res.data
            })
            console.log(res.data)
        })
    }

    render(){
        return(
            <div className='info-style'>
                
                {this.state.info.map(el =>{
                    return <div className='sentence'>
                                {el.info}
                           </div>
                })}
            </div>
        )
    }
}

export default Info;