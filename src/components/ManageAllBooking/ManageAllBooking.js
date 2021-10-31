import React, { useEffect, useState } from 'react';
import './ManageAllBooking.css'

const ManageAllBooking = () => {
    const [allBookings, setAllBooking] = useState([]);

    useEffect( () => {
        fetch('https://dark-web-37520.herokuapp.com/allBooking')
        .then(res => res.json())
        .then(data => setAllBooking(data))
    }, [])

    const handleCancel = email => {
        fetch(`https://dark-web-37520.herokuapp.com/booking/${email}`, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('This service deleted successfully')
                const remainingBooking = allBookings.filter(booking => booking.email !== email)
                setAllBooking(remainingBooking)
            }
        })

    }


    return (
        <div className="all-booking-container">
            <h1>Here is All Bookings</h1>
            {
                allBookings.map(booking => <div className="p-3" key={booking._id}>
                    <p>User name : {booking.name}</p>
                    <p>City : {booking.city}</p>
                    <p>Booking ID : {booking.booking.bookingId}</p>
                    <button onClick={() => handleCancel(booking.email)} className="btn btn-danger">Cancel Booking</button>
                    <hr />
                </div>)
            }
        </div>
    );
};

export default ManageAllBooking;