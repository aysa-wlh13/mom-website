import React, {Component} from 'react';
import './Info.css';
import InfoHeader from '../InfoHeader/InfoHeader';
import add from './add.png';
import edit from './edit.png';
import save from './squareSave.jpg';
import cancel from './cancel.jpg';
import axios from 'axios';


class Info extends Component {
    constructor(){
        super()

        this.state = {
            info:[],
            text: '',
            editInfo: []
        }
    }

    componentDidMount(){
        this.getInfo(this.props.match.params.users1_id);
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
        this.setState({
            editInfo: this.state.info.map(() => {
                return false
            })
        })
    }

    //add
    addInfo = id => {
        const {
            text
        } = this.state;
        axios
        .post(`/api/addInfo/${id}`, {
            info: text
        })
        .then(res => {
            this.getInfo(id);
            console.log('hit')
        })
    }

    //update
    updateInfo = id => {
        const {
            text
        } = this.state;
        axios
        .post(`/api/editInfo/${id}`, {
            info: text
        })
        .then(res => {
            this.getInfo();
        })
    }

    toggleInfo = (index) =>{
        let newArray = this.state.editInfo.slice()
        newArray[index] = !newArray[index]
        this.setState({
            editInfo: newArray
        })
    }

    render(){
 
        return(
            <div 
            className='info-style'>
                
                {this.state.info.map((el,index) =>{
                    console.log(el)

                    return <div className='sentence'>
                        {!this.state.editInfo[index] ? 
                               <> {el.info}

                                <section>
                                    <button 
                                    onClick={() => {
                                        this.toggleInfo(index)
                                    }}
                                    className='edit-style'>
                                        <img
                                        src={edit}alt='edit'
                                        height='20'/>
                                    </button>
                                </section>
                        </> : 
                        <div>
                            <input
                             className='edit-input'         onChange={e => this.handleInput ('text', e.target.value)}/>

                            <button className='cancel-but'
                            onClick={() => {
                                this.updateInfo(this.props.el.text_id)
                                this.toggleInfo()
                            }}>
                                <img
                                src={cancel}
                                alt='cancel'
                                height='17'/>
                            </button>

                            <button className='save-but'
                            onClick={this.toggleInfo}>
                                <img
                                src={save}
                                alt='save'
                                height='17'/>
                            </button>

                        </div>
                        }
                           </div>
                                
                })}
                
                <section className='info-page'>
                    <InfoHeader/>
                    
                    <article>
                        <input
                        className='add-input'
                        onChange={e => this.handleInput ('text', e.target.value)}/>

                        <button className='add-style'
                        onClick={() => {
                            this.addInfo(this.props.match.params.users1_id)
                        }}>
                                
                            <img
                            src={add}
                            alt='add'
                            height='30'/>
                        </button>
                    </article>
                </section>
            </div>
        )
    }
}

export default Info;