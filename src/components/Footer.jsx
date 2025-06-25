import React from "react";

const footerStyles = {
    background: "#222",
    color: "#fff",
    padding: "40px 0",
};

const containerStyles = {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
    gap: "32px",
};

const sectionStyles = {
    flex: "1 1 200px",
    minWidth: 220,
    marginBottom: 24,
};

const linkSectionStyles = {
    flex: "1 1 150px",
    minWidth: 150,
    marginBottom: 24,
};

const socialSectionStyles = {
    flex: "1 1 150px",
    minWidth: 150,
    marginBottom: 24,
};

const linksListStyles = {
    listStyle: "none",
    padding: 0,
    fontSize: 14,
};

const linkStyles = {
    color: "#ccc",
    textDecoration: "none",
};

const socialIconsStyles = {
    display: "flex",
    gap: "12px",
};

const copyrightStyles = {
    textAlign: "center",
    color: "#888",
    marginTop: 32,
    fontSize: 13,
};

const mobileMediaQuery = `
    @media (max-width: 700px) {
        .footer-container {
            flex-direction: column;
            gap: 0;
            padding: 0 16px;
        }
        .footer-section, .footer-link-section, .footer-social-section {
            min-width: unset !important;
            margin-bottom: 24px;
            
        }
        .footer-section img {
            margin-bottom: 8px;
        }
        .footer-section p, .footer-link-section ul, .footer-social-section {
            font-size: 15px !important;
        }
    }
`;

const Footer = () => {
    return (
        <footer style={footerStyles}>
            <style>{mobileMediaQuery}</style>
            <div className="footer-container" style={containerStyles}>
                {/* Logo & Description */}
                <div className="footer-section" style={sectionStyles}>
                    <img src="/logo192.png" alt="Logo" style={{ width: 60, marginBottom: 12 }} />
                    <p style={{ fontSize: 14, color: "#ccc" }}>
                        AIMSTech is dedicated to delivering innovative solutions and quality services to our clients worldwide.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-link-section" style={linkSectionStyles}>
                    <h4 style={{ color: "#fff", marginBottom: 12 }}>Quick Links</h4>
                    <ul style={linksListStyles}>
                        <li><a href="/" style={linkStyles}>Home</a></li>
                        <li><a href="/about" style={linkStyles}>About</a></li>
                        <li><a href="/services" style={linkStyles}>Services</a></li>
                        <li><a href="/contact" style={linkStyles}>Contact</a></li>
                    </ul>
                </div>

                {/* Contact Details */}
                <div className="footer-section" style={sectionStyles}>
                    <h4 style={{ color: "#fff", marginBottom: 12 }}>Contact Us</h4>
                    <p style={{ fontSize: 14, color: "#ccc", margin: 0 }}>
                        123 Main Street,<br />
                        New Delhi, India<br />
                        Email: info@aimstech.com<br />
                        Phone: +91 12345 67890
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="footer-social-section" style={socialSectionStyles}>
                    <h4 style={{ color: "#fff", marginBottom: 12 }}>Follow Us</h4>
                    <div style={socialIconsStyles}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyles}>
                            <svg width="24" height="24" fill="currentColor"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"></path></svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyles}>
                            <svg width="24" height="24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 8.99 4.07 7.13 1.64 4.15c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6a4.27 4.27 0 0 1-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.72 8.72 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z"></path></svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyles}>
                            <svg width="24" height="24" fill="currentColor"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.92 4.92 0 0 1 1.77 1.04 4.92 4.92 0 0 1 1.04 1.77c.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.92 4.92 0 0 1-1.04 1.77 4.92 4.92 0 0 1-1.77 1.04c-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.92 4.92 0 0 1-1.77-1.04 4.92 4.92 0 0 1-1.04-1.77c-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43a4.92 4.92 0 0 1 1.04-1.77 4.92 4.92 0 0 1 1.77-1.04c.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.013 7.052.072 5.77.13 4.78.32 4.01.56a7.07 7.07 0 0 0-2.56 1.64A7.07 7.07 0 0 0 .56 4.01c-.24.77-.43 1.76-.49 3.04C.013 8.332 0 8.736 0 12c0 3.264.013 3.668.072 4.948.058 1.28.25 2.27.49 3.04a7.07 7.07 0 0 0 1.64 2.56 7.07 7.07 0 0 0 2.56 1.64c.77.24 1.76.43 3.04.49C8.332 23.987 8.736 24 12 24s3.668-.013 4.948-.072c1.28-.058 2.27-.25 3.04-.49a7.07 7.07 0 0 0 2.56-1.64 7.07 7.07 0 0 0 1.64-2.56c.24-.77.43-1.76.49-3.04.059-1.28.072-1.684.072-4.948s-.013-3.668-.072-4.948c-.058-1.28-.25-2.27-.49-3.04a7.07 7.07 0 0 0-1.64-2.56A7.07 7.07 0 0 0 19.99.56c-.77-.24-1.76-.43-3.04-.49C15.668.013 15.264 0 12 0zm0 5.838A6.162 6.162 0 1 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"></path></svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={linkStyles}>
                            <svg width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.25 11.25h-3v-5.5c0-1.32-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9v5.6h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div style={copyrightStyles}>
                &copy; {new Date().getFullYear()} AIMSTech. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;