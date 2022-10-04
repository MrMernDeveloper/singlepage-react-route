import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <NavLink className={({isActive})=> isActive ? 'active': undefined} to='/home'>Home</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active': undefined} to='/product'>Products</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active': undefined} to='/friend'>Friends</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active': undefined} to='/posts'>Post</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active': undefined} to='/about'>About</NavLink>

        </div>
    );
};

export default Header;