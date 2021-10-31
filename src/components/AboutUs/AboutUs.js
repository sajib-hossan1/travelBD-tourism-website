import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="w-50 text-center">
                <h1>Travel <span className="secondary-color">BD</span></h1>
                <h4>We have 5+ years of experience.We have extraordinary tourist guide whom show you the scenic beauty of Bangladesh.You will be happy with us and also with oue tourist guides.Please visit our office for more information</h4>
                <Link to="/home"><button className="back-to-home-btn">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default AboutUs;