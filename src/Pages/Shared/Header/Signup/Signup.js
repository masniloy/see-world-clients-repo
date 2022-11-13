import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../firebase/AuthPro/AuthPro';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';



import(AuthContext)
const Signup = () => {

    const { user, usersLogin, logOut } = useContext(AuthContext);
    const hlogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const googleProvider = new GoogleAuthProvider();

    const forGoogle = () => {
        usersLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="mx-auto card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control" name="name">
                        <label className="label" >
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label" name='email'>
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label" name='password'>
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required /><br />
                        <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                    </div>
                    <p>Already have an Account <Link className='text-sky-500' to='/Signin' >Sign Up</Link></p>
                    <input className="btn btn-primary" onClick={forGoogle} type="submit" value="Sign Up With Google" />

                </form>
            </div>
            <br /><br /><br />
        </div >
    );
};

export default Signup;