import React, { useEffect, useState } from 'react';
import './BookingComponent.css'

const BookingComponent = (props) => {
    const {booking} = props.booking;

    const [myBooking, setMyBooking] = useState([]);

    useEffect( () => {
        fetch(`https://dark-web-37520.herokuapp.com/destinations/${booking.bookingId}`)
        .then(res => res.json())
        .then(data => setMyBooking(data))
    }, [])



    const handleCancel = id => {
        fetch(`https://dark-web-37520.herokuapp.com/myBooking/${id}`, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('This service deleted successfully')
                const remainingBooking = myBooking.filter(booking => booking._id !== id)
                setMyBooking(remainingBooking)
            }
        })

    }

    return (
        <div className="booking-component pt-3 px-3">
            <div className="card-booking mb-5 p-4">
                <img className="w-25 d-inline me-4" src={myBooking.image} alt="" />
                <div>
                    <h2>Name : {myBooking.name}</h2>
                    <h4>Attraction : {myBooking.attraction}</h4>
                    <p>Location : {myBooking.place}</p>
                    <button onClick={() => handleCancel(booking._id)} className="btn btn-danger">Cancel Booking</button>
                </div>
            </div>
        </div>
    );
};

export default BookingComponent;