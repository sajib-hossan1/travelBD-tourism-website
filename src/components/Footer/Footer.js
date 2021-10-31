import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer pt-5">
            <div className="row m-0">
                <div className="col-lg-4 col-md-6 col-sm-12 footer-p mb-4">
                    <h2>Travel <span className="secondary-color">BD</span></h2>
                    <p>Exploring Bnagladesh's most beautiful places with 5+ years of Experience.Our goal is to satisfying our customers.Please visit our office for more information.</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 footer-p mb-4">
                    <h2 className="ms-3">Contact Us</h2>
                    <address><i className="fas fa-map-marker-alt"></i> Address : 32/B, Dhanmondi, Dhaka, Bangladesh</address>
                    <p><i className="fas fa-envelope"></i> E-mail us : travel.bd@gmail.com</p>
                    <p><i className="fas fa-phone-alt"></i> Phone : 0123456789</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 footer-p">
                    <h2>Follow Us</h2>
                    <Link to="" className="text-decoration-none"><p><FontAwesomeIcon className="footer-fb-icon" icon={faFacebookSquare} /> Facebook</p></Link>
                    <Link to="" className="text-decoration-none"><p><FontAwesomeIcon className="footer-twitter-icon" icon={faTwitterSquare} /> Twitter</p></Link>
                    <Link to="" className="text-decoration-none"><p><FontAwesomeIcon className="footer-youtube-icon" icon={faYoutubeSquare} /> YouTube</p></Link>
                </div>
            </div>
            <p className="copyright-text">All Rights Reserved by Md. Sajib Hossan 	&copy; 2021</p>
        </div>
    );
};

export default Footer;