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
                    <Link className='px-4' to='/Blog'><h6>Blog</h6></Link>


                </ul>
                <div className="dropdown">
                    <Link tabIndex={0} className="btn m-1">Sign In / Up</Link>
                    {/* <label tabIndex={0} className="btn m-1">Sign In / Up</label> */}
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <Link className='options text-sky-500' variant="primary" to='/Signin'><h6> Sign In</h6></Link>
                        <Link className='options text-sky-500' variant="primary" to='/Signup'><h6> Sign Up</h6></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;