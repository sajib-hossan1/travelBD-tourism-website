import React from 'react';
import './Banner.css'
import { HashLink } from 'react-router-hash-link';
import { Nav } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="text-center banner-inner">
                <h1>Exploring Beautiful Places</h1>
                <h5>with</h5>
                <h2 className="web-title">Travel <span className="secondary-color">BD</span></h2>
                <Nav.Link as={HashLink} to='/home#destinations'><button className="booking-btn">Booking Now</button></Nav.Link>
            </div>
        </div>
    );
};

export default Banner;