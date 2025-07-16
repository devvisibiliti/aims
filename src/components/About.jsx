
import React from 'react';
const AboutHome = () => (
    <div className="about-container" style={{ display: 'flex', alignItems: 'center', backgroundColor:'#da251d' }}>
        <div className="about-image" style={{ flex: '0 0 auto', marginRight: '24px', width:'45%',paddingLeft: '20px' }}>
            <img
                src="/assets/images/home/AboutUshome.jpeg"
                alt="About"
                style={{ maxWidth: '500px', height: '500px', display: 'block', marginTop:'40px', marginLeft:'50px', marginBottom:'40px',  borderRadius:'10px' }}
            />
        </div>
        <div className="about-text" style={{ flex: '1 1 0%', width:'45%', padding: '16px', marginRight:'100px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <h2 style={{textAlign:'center', fontWeight:'bolder', fontSize:'30px', paddingBottom:'20px'}}>About Us</h2>
            <p style={{fontWeight:"700px", fontSize:'18px'}}>
                We are a multi-service technology solutions provider dedicated to delivering reliable, smart, and secure systems for homes and businesses. With a strong focus on quality and innovation, we specialize in CCTV surveillance, networking solutions, security systems, electrical works, and computer hardware and software services.

Our team of certified technicians and engineers brings years of hands-on experience across both residential and commercial projects. Whether you're setting up a secure office network, installing home CCTV, upgrading electrical infrastructure, or building a high-performance computer system — we provide end-to-end support with genuine products, transparent pricing, and timely execution.

We believe in long-term client relationships built on trust, efficiency, and service excellence. Every solution we deliver is customized to suit your space, usage, and budget. Backed by strong technical expertise and real-time support, our mission is to keep you protected, connected, and future-ready in an ever-evolving digital world.

With a reputation for reliability and professionalism, we are your trusted partner for integrated tech services that work — today and tomorrow.
            </p>
        </div>
    </div>
);

export default AboutHome;