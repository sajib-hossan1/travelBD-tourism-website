import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './AddNewDestination.css'

const AddNewDestination = () => {
    const { register, handleSubmit, reset } = useForm();


    
    // using history to redirect
    const history = useHistory();


    const onSubmit = data => {
        axios.post('https://dark-web-37520.herokuapp.com/addNewDestination', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Your service information added successfully')
                reset();
                history.push('/home');
            }
        })
    };

    return (
        <div className="add-destination-container">
        <h2>Add A New Destination</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} placeholder="Place Name" />
            <input {...register("attraction")} placeholder="Attraction" />
            <input {...register("place")} placeholder="Location" />
            <input {...register("description")} placeholder="Description" />
            <input type="number" {...register("price")} placeholder="Price" />
            <input {...register("image")} placeholder="Give a image url link" />
            <input className="btn btn-primary" type="submit" />
        </form>
        </div>
    );
};

export default AddNewDestination;