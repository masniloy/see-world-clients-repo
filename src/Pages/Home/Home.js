import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5725c5474c2f85c3ba4c01e4/1595181595262-SEE53ED51366HWZC7HJ3/PHOTOGRAPHY-FIELD.jpg?format=2500w")` }}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-5xl font-bold">Photography means 'drawing with light'</h1>
                        <p className="mb-5">Photography lets us see something we may never have noticed otherwise. Photography is a way to express your ideas for others to see. There is no way to deny that life flies by.</p>
                        <Link to='/Services'><button className="btn btn-primary">My Services</button></Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;