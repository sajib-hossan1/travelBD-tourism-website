import React from 'react';
import './Testimonials.css'
import client1 from '../../../images/clients/client-1.jpg'
import client2 from '../../../images/clients/client-2.jpg'
import client3 from '../../../images/clients/client-3.jpg'

const Testimonials = () => {
    return (
        <div class="testimonials-section">
            <h1>Testimonials</h1>
            <div class="flexible-container justify-content-center row">
                <div class="testimonial-item col-12 col-md-6 col-lg-4">
                    <img src={client1} alt="client"/>
                    <h3>@Alex Smith</h3>
                    <p>Travel Bd is awesome.I love Bangladesh.I want to come here more and more time and i will definately hire travel bd's tour guide.They are awesome.</p>
                </div>
                <div class="testimonial-item col-12 col-md-6 col-lg-4">
                    <img src={client2} alt="client"/>
                    <h3>@Alvin Rock</h3>
                    <p>Bangladesh is awesome.and Also travel bd is awesome too and their tiurist guide are awesome too.they are very friendly to me and think wil be for all.Recommended. 
                    </p>
                </div>
                <div class="testimonial-item col-12 col-md-6 col-lg-4">
                    <img src={client3} alt="client"/>
                    <h3>@Amelia Emma</h3>
                    <p>I love bangladesh for its natural.I come here to visit sundarban.So i need a tourist guide then i hire a tourist guide from travel bd and their service is awesome.recommended...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;