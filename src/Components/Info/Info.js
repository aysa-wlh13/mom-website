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

    //handle input
        handleInput(prop, value) {
            this.setState({
              [prop]: value
            });
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

                                <section>
                                    <button>

                                    </button>
                                </section>

                                <article>
                                    <button>

                                    </button>
                                </article>

                           </div>
                })}
            </div>
        )
    }
}

export default Info;