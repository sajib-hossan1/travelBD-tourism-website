import React from 'react';
import { Link } from 'react-router-dom';
import './Destination.css'

const Destination = (props) => {
    const {_id, name, image, place, attraction, price, description} = props.destination;
    return (
        <div className="col-12 col-md-6 col-lg-6">
            <div className="single-card">
                <div className="card-img">
                <img src={image} alt="service img" />
                </div>
                <h3>Attraction : {attraction}</h3>
                <hr />
                <h2 className="m-0">{name}</h2>
                <p className="pt-3"><i className="fas fa-map-marker-alt"/> Location : {place}</p>
                <hr />
                <p>Price : ৳ {price} BDT</p>
                <hr />
                <p>{description.slice(0,100)}...</p>
                <Link to={`/destination/${_id}`} ><button className="details-btn">More Details</button></Link>
            </div>
        </div>
    );
};

export default Destination;