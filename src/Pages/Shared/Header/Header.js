import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../logo1.png';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img href='/Home' className='h-16' src={logo1} alt="logo"></img>
                <h1 className="text-2xl font-semibold">See-World</h1>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <Link className='px-4' to='/Home'><h6>Home</h6></Link>
                    <Link className='px-4' to='/Services'><h6>Services</h6></Link>
                    <Link className='px-4' to='/Home'><h6>Blog</h6></Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;