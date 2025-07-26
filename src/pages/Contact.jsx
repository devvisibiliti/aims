import React from 'react';
import AppointmentForm from '../components/Appointmentform';
import Footer from '../components/Footer';


const Contact = () => {
    return (
        <div>
            {/* Banner */}
            <div style={{
                width: '100%',
                height: '500px',
                background: 'linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '2rem'
            }}>
                Contact Us
            </div>

            {/* Contact Form and Details */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '2rem',
                marginBottom: '2rem',
                flexWrap: 'wrap'
            }}>
                {/* Contact Form */}
                <div style={{
                    flex: '1 1 350px',
                    background: '#f9f9f9',
                    padding: '5rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                    <h2 style={{fontWeight:'bolder', fontSize:'30px', textAlign:'center'}}>Contact Now</h2>
                    <form>
                        <div style={{ marginBottom: '1rem' }}>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    marginTop: '0.5rem',
                                    border: '2px solid #000000',
                                    borderRadius: '4px'
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label>Phone</label>
                            <input
                                type="tel"
                                name="tel"
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    marginTop: '0.5rem',
                                    border: '2px solid #000000',
                                    borderRadius: '4px'
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label>Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    marginTop: '0.5rem',
                                    border: '2px solid #000000',
                                    borderRadius: '4px'
                                }}
                            />
                        </div>
                        <button type="submit" style={{
                            background: '#4e54c8',
                            color: '#fff',
                            padding: '0.75rem 2rem',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}>Send</button>
                    </form>
                </div>

                {/* Contact Details */}
                <div style={{
                    flex: '1 1 300px',
                    background: '#fff',
                    padding: '2rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                    <h2 style={{padding:'40px', fontWeight:'bolder', fontSize:'25px'}}>Contact Details</h2>
                    <p style={{padding:'20px'}}><strong>Address:</strong> No 13, 6th Cross St, Anna Nagar, Tiruvottiyur, Chennai, Tamil Nadu 600019</p>
                    <p style={{padding:'20px'}}><strong>Phone:</strong> +91 9884171721</p>
                    <p style={{padding:'20px'}}><strong>Email:</strong> sales.aimstechnologies@gmail.com</p>
                    <p style={{padding:'20px'}}><strong>Working Hours:</strong> Mon - Fri, 9:00am - 9:00pm</p>
                </div>
            </div>

            {/* Google Map */}
            <div style={{ width: '100%', height: '400px', marginBottom: '2rem' }}>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.906034766939!2d80.29866849999999!3d13.168324300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526feb3c05f53d%3A0xb15a084d5f304efc!2sAims%20Technologies!5e0!3m2!1sen!2sin!4v1753504777690!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
            </div>
            <Footer />
        </div>
        
    );
};

export default Contact;