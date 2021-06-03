import React, {Component} from 'react';
import Header from '../header/header';
import SearchPanel from '../searchPanel/searchPanel';
import PostStatusFilter from '../poststatusFilter/postStatusFilter'
import PostList from '../postList/postList';
import PostAddForm from '../postAddForm/postAddForm';
import './app.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {label: 'I learn React', important: true, like: true, id:1},
                {label: 'It is good', important: false, like: false, id:2 },
                {label: 'I need a break', important: false, like: false, id:3 }
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this)
        this.onSearchPost = this.onSearchPost.bind(this)
        this.onFilterSelect = this.onFilterSelect.bind(this)
    }
    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index),...data.slice(index+1)]
            
            return {
                data: newArr
            }
        })
    }
    toggleProperty = (id, property) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id)
            
            const old = data[index]
            const newItem = {...old}
            newItem[property] = !old[property]
        
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]
    
            return {
                data: newArr
            }
        })
    }
    

    onToggleImportant(id) {
       this.toggleProperty(id, 'important');
    }

    onToggleLiked(id) {
        this.toggleProperty(id, 'like');
    }

    onSearchPost(term) {
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({
            filter
        })
    }

    addItem(body) {
        this.setState(({data}) => {
            const newItem = {
                label: body,
                important: false,
                id: this.maxId++
            }

            const newArr = [...data,newItem]
            return {
                data: newArr
            }
        })
        
    }

    searchPost(items, term) {
        if(term.length < 1) {
            return items
        }
        return items.filter(item =>  item.label.indexOf(term) > -1)
    }

    filterPosts(items, filter) {
        if(filter === 'like') {
            return items.filter(item => item.like) 
        } else {
            return items
        }
    }
    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like === true).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);
        return (
            <div className='app'>
                <Header
                          liked={liked}
                          allPosts={allPosts}/>
                <div className='search-panel d-flex'>
                    <SearchPanel
                        onSearchPost={this.onSearchPost}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm onAdd={this.addItem}/>
            </div>
        ) 
    }
}





    


