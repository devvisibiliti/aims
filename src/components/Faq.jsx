import React, { useState } from "react";

const faqs = [
    {
        question: "What is AIMSTech?",
        answer: "AIMSTech is a platform providing technology solutions and resources for students and professionals.",
    },
    {
        question: "How can I contact support?",
        answer: "You can contact support via our contact form or email us at support@aimstech.com.",
    },
    {
        question: "Is there a mobile app available?",
        answer: "Yes, AIMSTech offers a mobile app for both Android and iOS devices.",
    },
    {
        question: "How do I reset my password?",
        answer: "Click on 'Forgot Password' at the login page and follow the instructions to reset your password.",
    },
    {
        question: "Are there any subscription plans?",
        answer: "Yes, we offer free and premium subscription plans. Visit our pricing page for more details.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
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
                    maxWidth: "45%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    src="https://via.placeholder.com/350x350?text=AIMSTech+FAQ"
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
                }}
            >
                <h2>Frequently Asked Questions</h2>
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
                                    display: "inline-block"
                                }}>
                                    ▶
                                </span>
                                {faq.question}
                            </button>
                            {openIndex === idx && (
                                <div style={{ marginTop: 8, color: "#555" }}>
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
    );
};

export default Faq;