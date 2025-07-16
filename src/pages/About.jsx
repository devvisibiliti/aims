import React from "react";
import Footer from "../components/Footer";

const bannerStyle = {
    width: "100%",
    height: "400px",
    background: "linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    letterSpacing: "2px",
};

const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    gap: "40px",
};

const imageStyle = {
    width: "400px",
    height:"500px",
    maxWidth: "100%",
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
};

const contentStyle = {
    flex: 1,
    fontSize: "1.1rem",
    color: "#333",
    lineHeight: "1.7",
};

const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#4e54c8",
};

const aboutText = `We are a multi-service technology solutions provider dedicated to delivering reliable, smart, and secure systems for homes and businesses. With a strong focus on quality and innovation, we specialize in CCTV surveillance, networking solutions, security systems, electrical works, and computer hardware and software services.

Our team of certified technicians and engineers brings years of hands-on experience across both residential and commercial projects. Whether you're setting up a secure office network, installing home CCTV, upgrading electrical infrastructure, or building a high-performance computer system — we provide end-to-end support with genuine products, transparent pricing, and timely execution.

We believe in long-term client relationships built on trust, efficiency, and service excellence. Every solution we deliver is customized to suit your space, usage, and budget. Backed by strong technical expertise and real-time support, our mission is to keep you protected, connected, and future-ready in an ever-evolving digital world.

With a reputation for reliability and professionalism, we are your trusted partner for integrated tech services that work — today and tomorrow.`;

function About() {
    return (
        <>
            <div>
                <div style={bannerStyle}>About Us</div>
                <div style={containerStyle} className="about-container">
                    <img
                        src="/assets/images/home/AboutUshome.jpeg"
                        alt="About AIMSTech"
                        style={imageStyle}
                    />
                    <div style={contentStyle}>
                        <div style={headingStyle}>Who We Are</div>
                        <p>{aboutText}</p>
                    </div>
                </div>
                <style>
                    {`
                        @media (max-width: 768px) {
                            .about-container {
                                flex-direction: column;
                                gap: 24px;
                                padding: 24px 8px;
                            }
                            .about-container img {
                                width: 100%;
                                max-width: 100%;
                                height: auto;
                            }
                        }
                    `}
                </style>
            </div>
            <section style={{display:'flex' }}>
                <div style={{flex:'1 1 45%', padding:'50px'}}>
                    <h2 style={{fontWeight:'bolder', fontSize:'50px'}}>Vision</h2>
                    <p>Our vision is to establish ourselves as a premier provider of intelligent, secure, and forward-thinking technology solutions. We strive to make everyday life and business operations more connected, efficient, and protected through innovation and trust. By offering high-quality services in CCTV, networking, electrical works, and computer systems, we aim to set a benchmark in reliability and performance—empowering individuals and organizations with systems that truly simplify and safeguard their environments.</p>
                </div>
                <div style={{flex:'1 1 45%', padding:'50px'}}>
                    <h2 style={{fontWeight:'bolder', fontSize:'50px'}}>Mission</h2>
                    <p>Our mission is to deliver end-to-end technology services that exceed customer expectations in quality, speed, and reliability. We focus on personalized solutions across surveillance, networking, electrical, and IT domains—backed by certified experts, genuine products, and prompt support. We are committed to building long-term client relationships through transparent communication, affordable pricing, and consistent service excellence. Our goal is to help our clients stay secure, connected, and future-ready in an ever-evolving digital world.</p>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default About;