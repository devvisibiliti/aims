import React from "react";

const sectionStyle = {
    display: "flex",
    alignItems: "center",
    minHeight: "350px",
    flexWrap: "wrap",
    padding: "1rem 0",
};

const leftStyle = {
    flex: "1 1 300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "250px",
    marginBottom: "1rem",
};

const rightStyle = {
    flex: "1 1 300px",
    padding: "0 2rem",
    minWidth: "250px",
};

const imgStyle = {
    width: "90%",
    borderRadius: "12px",
    objectFit: "cover",
    maxWidth: "450px",
    minWidth: "200px",
};

const WhyChooseHome = () => {
    return (
        <section style={sectionStyle}>
            <div style={leftStyle}>
                <img
                    src="/assets/images/whychoose/Networking.jpeg"
                    alt="Why Choose Us"
                    style={imgStyle}
                />
            </div>
            <div style={rightStyle}>
                <h2 style={{textAlign:'center', fontWeight:'bolder', fontSize:'50px'}}>Why Choose Us</h2>
                
                    <ul>
                    <li style={{padding:'10px'}}>We are your trusted partner for smart, secure, and future-ready technology solutions. Whether you’re upgrading your home with CCTV cameras, setting up a secure office network, or installing electrical systems in a new building, we offer complete, end-to-end services tailored to your needs.</li>
                    <li style={{padding:'10px'}}>What sets us apart is our ability to handle multiple services under one roof — including security systems, networking, electrical works, and computer hardware/software solutions. Our team of certified professionals brings years of experience, delivering high-quality installations and reliable tech support with a strong focus on safety, performance, and customer satisfaction.</li>
                    <li style={{padding:'10px'}}>We use only genuine, branded products and ensure every service is carried out with attention to detail and care. From consultation to execution, we follow a transparent and customer-first approach with clear communication, affordable pricing, and post-service support.</li>
                    <li style={{padding:'10px'}}>Whether you're a homeowner, business owner, or property developer, choosing us means choosing peace of mind, professionalism, and a long-term tech partner you can rely on.</li>
                </ul>

                
                
            </div>
            <style>
                {`
                @media (max-width: 768px) {
                    section[style] {
                        flex-direction: column !important;
                        min-height: unset !important;
                    }
                    section[style] > div {
                        padding: 0 1rem !important;
                        min-width: 0 !important;
                    }
                    section[style] img {
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                }
                `}
            </style>
        </section>
    );
};

export default WhyChooseHome;