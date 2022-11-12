import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX28691459.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Hi, I'm James</h1>
                        <p className="py-6">In my studio we'll take your items and give them that professional studio look. Everything will be shot on models that I work with every week. <br />
                            I have years of experience photographing items for vintage and new brand sellers. My photography has been used on Asos Marketplace, Depop, Etsy, eBay and more. Our photography is regularly used by and re-grammed by major Instagram profiles to promote their pages and our customers.
                        </p>
                        <Link to='/Services'><button className="btn btn-primary">My Services</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;