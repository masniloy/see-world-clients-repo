import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const servicedetail = useLoaderData();
    const { _id, name, image, price, description, rating } = servicedetail;

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <img src={image} className="max-w-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;