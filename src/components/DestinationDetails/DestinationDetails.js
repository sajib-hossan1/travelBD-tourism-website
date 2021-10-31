import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './DestinationDetails.css'

const DestinationDetails = () => {
    const {destinationId} = useParams();

    const [destinationDetail, setDestinationDetail] = useState({});
    
    useEffect(()=> {
        fetch(`https://dark-web-37520.herokuapp.com/destination/${destinationId}`)
        .then(res => res.json())
        .then(data => setDestinationDetail(data))
    }, [])



    return (
        <div className="detail-service-container">
            <div className="place-detail">
                <h2>Place Name : {destinationDetail?.name}</h2>
                <h4>Attraction Of This Place : {destinationDetail?.attraction}</h4>
                <h6 className=""><i className="fas fa-map-marker-alt"/> Location : {destinationDetail.place}</h6>
            </div>
            <div className="service-details flex-md-column flex-sm-column flex-lg-row flex-column">
                <img className="img-fluid" src={destinationDetail?.image} alt="" />
                <div>
                    <p>{destinationDetail?.description}</p>
                    <Link to={`/booking/${destinationId}`} ><button className="booking-btn">Booking Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;