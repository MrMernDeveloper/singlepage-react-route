import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/product'>Products</Link>
            <Link to='/friend'>Friends</Link>
            <Link to='posts'>Post</Link>
            <Link to='/about'>About</Link>

        </div>
    );
};

export default Header;