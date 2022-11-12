import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const singleData = useLoaderData();
    const { image, name, description, price, tclass } = singleData;
    console.log(name);
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col">
                    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;