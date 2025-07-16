import React from "react";

const googleReviews = [
  {
    reviewer: "Priya S.",
    rating: 5,
    text: "I got my home CCTV, WiFi networking, and inverter wiring done by this team. Everything was handled professionally, and they finished on time. Loved their all-in-one service model in Chennai. Highly recommended!",
    date: "2024-05-10"
  },
  {
    reviewer: "Ramesh K.",
    rating: 5,
    text: "From installing commercial CCTV cameras to configuring our computer systems and access control, their team handled everything with expertise. Excellent support and fair pricing—especially for businesses in T Nagar.",
    date: "2024-04-22"
  },
  {
    reviewer: "Anitha M.",
    rating: 4,
    text: "I upgraded my desktop, added extra RAM, and installed antivirus—all through them. Later, I also got a wireless door alarm and power backup fitted. Great coordination and helpful staff. Super happy!",
    date: "2024-03-18"
  },
  {
    reviewer: "Anitha M.",
    rating: 4,
    text: "We had a fire detection system installed for our warehouse, and the team ensured every corner was covered. Their service was prompt, professional, and affordable. Definitely one of the best in Chennai!",
    date: "2024-03-18"
  },
  {
    reviewer: "Anitha M.",
    rating: 4,
    text: "I needed genuine MS Office and antivirus for my new laptop. They helped with licensed software, installation, and updates. Everything works perfectly. Great for home and office system needs!",
    date: "2024-03-18"
  },
  {
    reviewer: "Anitha M.",
    rating: 4,
    text: "We installed biometric access for our office and got the entire place rewired. Their electricians and tech experts worked together seamlessly. Highly reliable service for both security and electrical needs.",
    date: "2024-03-18"
  }
];

const reviewContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "24px",
  // paddingLeft: "60px",
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center"
};

const reviewCardStyle = {
  background: "#fafafa",
  borderRadius: "10px",
  boxShadow: "0 2px 8px #0001",
  padding: "20px",
  maxWidth: "320px",
  minWidth: "220px",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer"
};

const reviewCardHoverStyle = {
  transform: "translateY(-8px) scale(1.03)",
  boxShadow: "0 8px 24px #0002, 0 2px 8px #0001",
  background: "#24c9b3"
};

function ReviewCard({ reviewer, rating, text, date }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className="google-review"
      style={hover ? { ...reviewCardStyle, ...reviewCardHoverStyle } : reviewCardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ fontWeight: "bold", marginBottom: 6 }}>{reviewer}</div>
      <div style={{ color: "#fbbc04", marginBottom: 8 }}>
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>
      <div style={{ fontSize: "1rem", marginBottom: 10 }}>{text}</div>
      <div style={{ fontSize: "0.9em", color: "#888" }}>{date}</div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="google-reviews">
      <h2 style={{ textAlign: "center", color: "#da251d", fontSize: 50, paddingBottom: 20, fontWeight:'bolder' }}>
        Our Customers Google Reviews
      </h2>
      <div style={reviewContainerStyle}>
        {googleReviews.map((r, idx) => (
          <ReviewCard
            key={idx}
            reviewer={r.reviewer}
            rating={r.rating}
            text={r.text}
            date={r.date}
          />
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 16, padding: 20 }}>
        <a
          href="https://www.google.com/maps/place/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{ background: "#da251d", color: "#fff", padding: "10px 20px", borderRadius: "5px", textDecoration: "none" }}
        >
          View All Google Reviews
        </a>
      </div>
    </section>
  );
}