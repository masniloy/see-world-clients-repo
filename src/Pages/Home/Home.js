import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Photos from './Photos/Photos';
// import Services from '../Services/Services';

const Home = () => {
    // const home = useLoaderData();
    {/* <Services></Services><br /><br /> */ }
    return (
        <div>
            <Banner></Banner><br /><br />

            <About></About><br /><br />
            <Photos></Photos><br /><br />

        </div>

    );
};

export default Home;