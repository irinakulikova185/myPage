import React, {Component} from 'react';
import './search-panel.css'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }
    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term})
        this.props.onSearchPost(term);
    }
    render() {
        return (
            <input
                type='text'
                placeholder='Поиск по записям'
                className='search-input'
                onChange={this.onUpdateSearch}>
                   
                </input>
        )
    }
    
}
