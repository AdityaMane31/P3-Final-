import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>
                We are a leading food delivery service that connects you with your favorite restaurants and cuisines.
                Our mission is to provide a seamless dining experience by delivering delicious meals right to your door.
            </p>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIqW0w6V-CGg_Pol0VVGlHXhPqO-Z3GwVqA&s"
                alt="About Us"
                style={{ width: '100%', borderRadius: '8px' }}
            />
            <h2>Our Values</h2>
            <ul>
                <li>Quality Food</li>
                <li>Fast Delivery</li>
                <li>Customer Satisfaction</li>
                <li>Variety of Options</li>
            </ul>
        </div>
    );
};

export default About;
