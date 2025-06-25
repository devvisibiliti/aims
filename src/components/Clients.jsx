import React from "react";

const clients = [
    { name: "Client 1", logo: "https://via.placeholder.com/120x60?text=Logo+1" },
    { name: "Client 2", logo: "https://via.placeholder.com/120x60?text=Logo+2" },
    { name: "Client 3", logo: "https://via.placeholder.com/120x60?text=Logo+3" },
    { name: "Client 4", logo: "https://via.placeholder.com/120x60?text=Logo+4" },
    { name: "Client 5", logo: "https://via.placeholder.com/120x60?text=Logo+5" },
    { name: "Client 6", logo: "https://via.placeholder.com/120x60?text=Logo+6" },
];

function getVisibleCount(width) {
    if (width < 600) return 1;
    if (width < 900) return 2;
    return 3;
}

const Clients = () => {
    const [start, setStart] = React.useState(0);
    const [visibleCount, setVisibleCount] = React.useState(getVisibleCount(window.innerWidth));

    React.useEffect(() => {
        const handleResize = () => setVisibleCount(getVisibleCount(window.innerWidth));
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const next = () => setStart((prev) => (prev + 1) % clients.length);
    const prev = () => setStart((prev) => (prev - 1 + clients.length) % clients.length);

    const visibleClients = [];
    for (let i = 0; i < visibleCount; i++) {
        visibleClients.push(clients[(start + i) % clients.length]);
    }

return (
  <div
    className="clients-carousel-container"
    style={{
      position: "relative", // needed for absolute buttons inside
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "0 1rem",
      boxSizing: "border-box",
    }}
  >
    {/* Left Arrow */}
    <button
      onClick={prev}
      className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-1 sm:p-2 hover:bg-opacity-70 focus:outline-none z-20"
      aria-label="Previous Slide"
      style={{ border: "none", cursor: "pointer" }}
    >
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <div
      className="clients-carousel"
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "60%",
        overflow: "hidden",
      }}
    >
      {visibleClients.map((client, idx) => (
        <div className="client-logo-wrapper" key={idx}>
          <img
            src={client.logo}
            alt={client.name}
            className="client-logo"
            style={{ width: "120px", height: "60px", objectFit: "contain" }}
          />
        </div>
      ))}
    </div>

    {/* Right Arrow */}
    <button
      onClick={next}
      className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-1 sm:p-2 hover:bg-opacity-70 focus:outline-none z-20"
      aria-label="Next Slide"
      style={{ border: "none", cursor: "pointer" }}
    >
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
);

}
export default Clients;