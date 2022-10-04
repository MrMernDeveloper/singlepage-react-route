import React from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post)
    const { body, title, id, userId} = post
    const navigate = useNavigate();
    const authorHandler = () => {
        navigate(`/friend/${userId}`)
        

        
    }
    return (
        <div>
            <h1>Here are post details</h1>
            <h3>{ id}</h3>
            <h5>{title}</h5>
            <p>{body}</p>
            <button onClick={authorHandler}>Get The author</button>
            
        </div>
    );
};

export default PostDetails;