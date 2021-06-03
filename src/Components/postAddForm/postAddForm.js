import React, {Component} from 'react';
import './post-add-form.css'

export default class PostAddForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const {onAdd} = this.props
        onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }
    render() {
        
        return (
            <form 
                className='d-flex justify-content-between bottom-panel'
                onSubmit={this.onSubmit}>
                <input
                    className='d-flex form-control new-post-label'
                    type='text'
                    placeholder='О чем вы думаете сейчас?'
                    onChange={this.onChange}
                    value={this.state.text}
                    >
                </input>
                <button 
                    type='submit'
                    className='btn btn-outline-secondary'>
                    Добавить
                </button>
            </form>
        )
    }
}
    

