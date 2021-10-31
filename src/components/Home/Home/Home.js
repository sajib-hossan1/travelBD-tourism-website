import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Destinations></Destinations>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;