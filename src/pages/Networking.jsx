import React, { useState } from 'react';
import { FaRupeeSign, FaStar, FaUsers, FaHeadset,  } from 'react-icons/fa';
import Footer from '../components/Footer';

const Banner = () => {
  return (
    <div style={{
      backgroundImage: 'url("/assets/images/banners/NetworkingBanner.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '500px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
    }}>
      <h1 style={{fontWeight:'bolder', fontSize:'50px'}}>Networking Services</h1>
    </div>
  );
};
const Description = () => {
return (  
    <div style={{ padding: '10px', maxWidth: '900px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center', fontSize:'50px', fontWeight:'bolder', paddingBottom:'20px' }}>About Our Networking Services</h2>
        <p style={{ fontSize:'18px', textAlign: 'justify', lineHeight: '1.6'}}>
            Our networking services cover everything from home WiFi setup to complex commercial network infrastructures. We offer system networking for servers and devices, high-speed LAN cabling, firewall configuration, router installation, and WiFi range extensions. Whether you're building a smart home or managing a multi-floor office, we ensure fast, secure, and stable internet connections throughout your space. Our technicians handle both wired and wireless systems with professional-grade components. We also provide AMC and troubleshooting support. With service coverage across Chennai, our networking solutions help you stay connected without lag, downtime, or signal loss, no matter your space or scale.
        </p>
        {/* <p style={{fontFamily:'poppins', fontSize:'20px', textAlign: 'justify', lineHeight: '1.6'}}>
           
        </p> */}
    </div>
);    
}




const cameraData = [
    {
        id: 1,
        title: '🌐 System Networking',
        description: 'System networking forms the backbone of digital communication. It connects servers, switches, and storage devices, enabling secure and fast data transfer. Great for IT systems, it guarantees high uptime and good performance.',
        imageUrl: '/assets/images/networking/SystemNetworking.jpeg',
    },
    {
        id: 2,
        title: '🏢 Commercial Networking',
        description: 'Commercial networking solutions are made to grow and work quickly.Whether its a multi-floor office, retail store, or corporate campus, our networks deliver reliable connectivity, firewall protection, and enterprise-level performance.',
        imageUrl: '/assets/images/networking/HomeBasedNetworking.jpeg',
    },
    {
        id: 3,
        title: '🏠 Home-Based Networking',
        description: 'Home networking setups are perfect for smart homes, remote work, and online entertainment. From WiFi routers to mesh systems, we offer seamless internet access across every room with top-tier security.',
        imageUrl: '/assets/images/networking/CommercialNetworking.jpeg',
    },
    
];

const CameraCard = ({ title, description, imageUrl }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: '#fff',
                borderRadius: '8px',
                boxShadow: hovered
                    ? '0 8px 20px rgba(0,0,0,0.2)'
                    : '0 2px 8px rgba(0,0,0,0.1)',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                minWidth: 0,
            }}
        >
            <img
                src={imageUrl}
                alt={title}
                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '6px' }}
            />
            <h3 style={{ marginTop: '15px', fontSize:'20px', fontWeight:'bolder' }}>{title}</h3>
            <p style={{ color: '#555' }}>{description}</p>
        </div>
    );
};

const CameraGrid = () => {
    // Inline responsive styles using a media query
    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
    };

    // Add a style tag for responsive grid
    return (
        <section style={{ padding: '40px 20px', backgroundColor: '#f8f9fa'}}>
            <style>
                {`
                    @media (max-width: 900px) {
                        .camera-grid {
                            grid-template-columns: repeat(2, 1fr) !important;
                        }
                    }
                    @media (max-width: 600px) {
                        .camera-grid {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}
            </style>
            <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize:'50px', fontWeight:'bolder' }}>
                Types of Networking Services We Provide
            </h2>
            <div
                className="camera-grid"
                style={gridStyles}
            >
                {cameraData.map(({ id, title, description, imageUrl }) => (
                    <CameraCard
                        key={id}
                        title={title}
                        description={description}
                        imageUrl={imageUrl}
                    />
                ))}
            </div>
        </section>
    );
};





const productDescription = {
    title: 'Why Choose Networking Products',
    bullets: [
        '✅From WiFi setup to enterprise-grade LAN networks, we handle everything—installation, configuration, and maintenance.',
        '✅Our skilled professionals ensure secure, high-speed, and structured networking using industry-best practices.',
        '✅We tailor networking systems to fit your home layout or business infrastructure, ensuring seamless connectivity.',
        '✅We use trusted brands and durable equipment for routers, switches, cabling, and accessories.',
        '✅Timely setup without compromising quality—perfect for homes, startups, offices, and institutions.',
    ],
    imageUrl: '/assets/images/whychoose/Networking.jpeg', // replace with your image path
};

const ProductsOffer = () => {
    return (
        <section
            style={{
                padding: '40px 20px',
                backgroundColor: '#fff',
                maxWidth: '1200px',
                margin: '0 auto',
            }}
        >
            <style>
                {`
                    @media (max-width: 900px) {
                        .products-offer-flex {
                            flex-direction: column !important;
                            gap: 30px !important;
                        }
                        .products-offer-img, .products-offer-content {
                            flex-basis: 100% !important;
                            width: 100% !important;
                            max-width: 100% !important;
                        }
                    }
                `}
            </style>
            <div
                className="products-offer-flex"
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    gap: '10%',
                }}
            >
                <div className="products-offer-img" style={{ flexBasis: '45%' }}>
                    <img
                        src={productDescription.imageUrl}
                        alt={productDescription.title}
                        style={{
                            width: '100%',
                            borderRadius: '8px',
                            objectFit: 'cover',
                            maxHeight: '5450px',
                        }}
                    />
                </div>

                <div className="products-offer-content" style={{ flexBasis: '45%' }}>
                    <h2 style={{fontSize:'30px', fontWeight:'bolder', padding:'20px'}}>{productDescription.title}</h2>
                    <ul style={{ paddingLeft: '20px', color: '#555', textAlign: 'justify' }}>
                        {productDescription.bullets.map((point, idx) => (
                            <li key={idx} style={{ marginBottom: '10px', fontSize: '16px',  }}>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};



const reasons = [
  { id: 1, title: 'Reasonable Pricing', icon: <FaRupeeSign size={40} /> },
  { id: 2, title: 'Best Quality', icon: <FaStar size={40} /> },
  { id: 3, title: 'Professional Team', icon: <FaUsers size={40} /> },
  { id: 4, title: '24/7 Support', icon: <FaHeadset size={40} /> },
];

const ReasonCard = ({ title, icon }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: '1 1 200px',
        margin: '10px',
        padding: '30px 20px',
        borderRadius: '10px',
        backgroundColor: hovered ? '#007BFF' : '#f0f0f0',
        color: hovered ? '#fff' : '#333',
        boxShadow: hovered
          ? '0 8px 20px rgba(0, 123, 255, 0.4)'
          : '0 2px 8px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '18px',
        transition: 'all 0.3s ease',
        userSelect: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
      }}
    >
      <div style={{ color: hovered ? '#fff' : '#007BFF' }}>{icon}</div>
      {title}
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section
      style={{
        padding: '50px 20px',
        backgroundColor: '#fff',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '30px', fontWeight: 'bolder' }}>
        Why Choose Our Service
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: '20px',
        }}
      >
        {reasons.map(({ id, title, icon }) => (
          <ReasonCard key={id} title={title} icon={icon} />
        ))}
      </div>
    </section>
  );
};


const Button =()=> {
  return (
    <button
      style={{
        display: 'block',
        margin: '20px auto',
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007BFF')}
    >
      Get a Free Quote
    </button>
  );
}











const Networking = () => {
  return (
    <div>
      <Banner />
      <Description />
      <CameraGrid />
      <ProductsOffer />
      <WhyChooseUs />
      <Button />
      <Footer />
      {/* Other content for the service page */}
    </div>
  );
};

export default Networking;
