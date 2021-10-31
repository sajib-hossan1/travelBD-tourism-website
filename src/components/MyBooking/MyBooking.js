import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import BookingComponent from '../BookingComponent/BookingComponent';
import './MyBooking.css'

const MyBooking = () => {
    const {user} = useAuth();

    const [allBookings, setallBooking] = useState([]);

    useEffect( () => {
        fetch('https://dark-web-37520.herokuapp.com/allBooking')
        .then(res => res.json())
        .then(data => setallBooking(data))
    }, [])

    const bookings = allBookings?.filter(booking => booking.email === user.email);

    return (
        <div className="my-booking-container">
            <h1>Here Is Your All Booking : {allBookings.length}</h1>
            {
                bookings?.map(booking => <BookingComponent
                    key={booking._id}
                    booking={booking}
                ></BookingComponent>)
            }
        </div>
    );
};

export default MyBooking;