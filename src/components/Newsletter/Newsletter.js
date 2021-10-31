import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className="newsletter-container">
            <h1>News letter</h1>
            <p>Get The Latest Desination & Travel Information From Us</p>
            <form className="w-50 mx-auto">
              <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Newsletter;