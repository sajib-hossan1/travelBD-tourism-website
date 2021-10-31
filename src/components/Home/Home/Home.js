import React from 'react';
import Newsletter from '../../Newsletter/Newsletter';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Destinations></Destinations>
            <Testimonials></Testimonials>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;