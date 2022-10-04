import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './post.css'

const Post = ({ post }) => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`)
        
    }
    
    const {title, body,id}= post
    return (
        <div className='post'>
            <h4>{title}</h4>
            <p>{body.slice(0, 200) + '....'}</p>
            <Link to={`/posts/${id}`}>visit { id}</Link>
            <Link to={`/posts/${id}`}>
                <button>Show details</button>
            </Link>
            <button onClick={handleNavigate}>Show Details2</button>
        </div>
    );
};

export default Post;