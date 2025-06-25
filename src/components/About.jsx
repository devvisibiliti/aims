
import React from 'react';
const About = () => (
    <div className="about-container" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="about-image" style={{ flex: '0 0 auto', marginRight: '24px', width:'45%',paddingLeft: '20px' }}>
            <img
                src="/images/Home/about.jpg"
                alt="About"
                style={{ maxWidth: '200px', height: 'auto', display: 'block' }}
            />
        </div>
        <div className="about-text" style={{ flex: '1 1 0%', width:'45%', padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <h2>About Us</h2>
            <p>
                Welcome to our website! We are dedicated to providing the best services to our customers.
                Our team is passionate and experienced, always striving for excellence.
            </p>
        </div>
    </div>
);

export default About;