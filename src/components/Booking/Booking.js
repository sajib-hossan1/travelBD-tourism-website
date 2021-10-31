import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css'


const Booking = () => {
    const {bookingId} = useParams();

    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    // using history to redirect
    const history = useHistory();

    
    const onSubmit = data => {
        const booking = {bookingId}
        data.booking = booking;

        fetch('https://dark-web-37520.herokuapp.com/booking', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(data => data.json())
        .then(result => {
            if(result.insertedId){
                alert('Your Booking Placed Successfully.')
                reset();
                history.push('/home');
            }
        })
    };

    return (
        <div className="booking">
        <h2>Please Give More Information For Booking</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email")} />
                <input {...register("address")} placeholder="Your Address" />
                <input {...register("city")} placeholder="City" />
                <input type="number" {...register("number")} placeholder="Your phone number" />
                <input className="btn btn-primary" type="submit"  />
            </form>
        </div>
    );
};

export default Booking;