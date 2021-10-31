import React, { useEffect, useState } from 'react';
import Destination from '../Destination/Destination';
import './Destinations.css'

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect( () => {
        fetch('https://dark-web-37520.herokuapp.com/destinations')
        .then(res => res.json())
        .then(data => setDestinations(data))
    }, [])
    
    return (
        <div id="destinations" className="mb-5">
            <h1 className="text-center pt-5">Destinations</h1>
            <div className="row m-0">
            {
                destinations.map(destination => <Destination
                                                key={destination._id}
                                                destination={destination}
                                                ></Destination>)
            }
            </div>
        </div>
    );
};

export default Destinations;