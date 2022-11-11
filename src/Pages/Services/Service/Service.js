import React from 'react';

const Service = ({ service }) => {
    const { _id, name, image, price, description, rating } = service;
    console.log(_id);

    return (
        <div >
            <div className="rating rating-sm min-h-full card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p><b>PRICE: {price}</b></p>
                    <p><b>{rating}<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" /></b></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;