import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service/Service';

const Services = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='flex flex-row flex-wrap justify-between'>
            {
                services.map(service => <Service
                    key={service?.id}
                    service={service}
                ></Service>)
            }

        </div>
    );
};

export default Services;