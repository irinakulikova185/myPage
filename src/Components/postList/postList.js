import React from 'react';
import PostListItem from '../postListItem/postListItem';
import './post-list.css'
const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const elements = posts.map(item => {
        const {label, important, id, like} = item
        return (
            <li key={id} className='list-group-item list-item'>
                <PostListItem 
                    label={label} 
                    important={important}
                    like={like}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}/>
            </li>
        )
    })

    return (
        <ul className='app-list'>
           {elements}
        </ul>
        )
}

export default PostList;