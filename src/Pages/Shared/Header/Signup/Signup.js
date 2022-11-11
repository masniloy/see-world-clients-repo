import React from 'react';
// import { useState } from 'react';
// import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../firebase/AuthPro/AuthPro';



import(AuthContext)
const Signup = () => {
    // const [error, setError] = useState('');
    // const { creatUser, userProfile } = useContext(AuthContext)
    // const handlesignup = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(name);

    //     creatUser(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             setError('');
    //             console.log(user);
    //             forUserProfile(name)

    //         })
    //         .catch(error => {
    //             console.error(error)
    //             setError(error.message)
    //         })
    // }
    // const forUserProfile = (name) => {
    //     const profile = {
    //         displayName: name
    //     }
    //     userProfile(profile)
    //         .then(() => { })
    //         .catch(error => console.error(error));
    // }
    // onSubmit={handlesignup}
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
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                    </div>
                    <p>Already have an Account <Link className='text-sky-500' to='/Signin' >Sign Up</Link></p>
                    <input className="btn btn-primary" type="submit" value="Sign Up With Google" />
                </form>
            </div>
            <br /><br /><br />
        </div>
    );
};

export default Signup;