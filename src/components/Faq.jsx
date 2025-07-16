import React, { useState } from "react";

const faqs = [
    {
        question: "Which is the best CCTV camera for home use?",
        answer: "WiFi-enabled CCTV cameras are the best for homes as they allow live monitoring through your smartphone, offer night vision, motion detection, and require no complex wiring.",
    },
    {
        question: "How much does it cost to install CCTV in Chennai?",
        answer: "Basic home CCTV installations start from ₹2,500 to ₹7,000 per camera. Commercial and multi-camera setups with DVR/NVR systems can range from ₹15,000 to ₹50,000 depending on features.",
    },
    {
        question: "Who provides electrical wiring services near me?",
        answer: "We offer certified electrical services across Chennai, including T. Nagar, Kolathur, and surrounding areas. From new wiring to panel installation, we cover all home and commercial needs.",
    },
    {
        question: "Where can I get original software installation in Chennai?",
        answer: "We provide licensed software installations like Windows, MS Office, antivirus, and AutoCAD, including activation and setup, for personal and business systems across Chennai.",
    },
    {
        question: "How do I set up a WiFi network at home or office?",
        answer: "We offer complete WiFi network setup including router installation, signal optimization, LAN cabling, and mesh system configuration for homes and businesses in Chennai.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div style={{backgroundColor:'#da251d', padding:'50px'}}>
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                
                alignItems: "flex-start",
                maxWidth: 900,
                margin: "0 auto",
                gap: 20,
            }}
        >
            {/* Left Side Image */}
            <div
                style={{
                    flex: "1 1 300px",
                    minWidth: "250px",
                    maxWidth: "400px",
                    width: "100%",
                    height:"400px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    src="/assets/images/home/FAQ-.jpeg"
                    alt="FAQ Illustration"
                    style={{
                        width: "100%",
                        maxWidth: 350,
                        height: "auto",
                        borderRadius: 12,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                    }}
                />
            </div>
            {/* Right Side FAQs */}
            <div
                style={{
                    flex: "1 1 300px",
                    minWidth: "250px",
                    maxWidth: "45%",
                    width: "100%",
                    color:'#ffffffff'
                }}
            >
                <h2 style={{fontWeight:'bolder', fontSize:'30px'}}>Frequently Asked Questions</h2>
                <div>
                    {faqs.map((faq, idx) => (
                        <div key={idx} style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}>
                            <button
                                onClick={() => toggleFaq(idx)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    fontSize: "1.1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    padding: 0,
                                }}
                            >
                                <span style={{
                                    marginRight: 10,
                                    transition: "transform 0.2s",
                                    transform: openIndex === idx ? "rotate(90deg)" : "rotate(0deg)",
                                    display: "inline-block",
                                    fontWeight:'bolder', fontSize:'30px'
                                }}>
                                    ▶
                                </span>
                                {faq.question}
                            </button>
                            {openIndex === idx && (
                                <div style={{ marginTop: 8, color: "#ffffffff" }}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* Responsive styles */}
            <style>
                {`
                @media (max-width: 800px) {
                    .faq-flex-container {
                        flex-direction: column;
                        gap: 0;
                    }
                    .faq-left, .faq-right {
                        max-width: 100% !important;
                        min-width: 0 !important;
                    }
                }
                `}
            </style>
        </div>
        </div>
    );
};

export default Faq;