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
    maxWidth: "350px",
    minWidth: "200px",
};

const WhyChoose = () => {
    return (
        <section style={sectionStyle}>
            <div style={leftStyle}>
                <img
                    src="https://via.placeholder.com/350x250"
                    alt="Why Choose Us"
                    style={imgStyle}
                />
            </div>
            <div style={rightStyle}>
                <h2>Why Choose Us</h2>
                <p>
                    We provide top-notch services with a focus on quality, reliability, and customer satisfaction.
                    Our experienced team ensures that you get the best solutions tailored to your needs.
                </p>
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

export default WhyChoose;