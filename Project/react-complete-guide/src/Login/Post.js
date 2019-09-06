import React from 'react';
import Post from './Post.css';


const post = (props) => {
    return (
        <div className = "Post">
            <p> {props.title} </p>
        </div>
    )
}

export default post;