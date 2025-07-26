import React, { useState } from 'react';
import { FaRupeeSign, FaStar, FaUsers, FaHeadset,  } from 'react-icons/fa';
import Footer from '../components/Footer';

const Banner = () => {
  return (
    <div style={{
      backgroundImage: 'url("/assets/images/banners/ElectricalworksBanner.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '500px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
    }}>
      <h1 style={{fontWeight:'bolder', fontSize:'50px'}}>Electrical Services</h1>
    </div>
  );
};
const Description = () => {
return (  
    <div style={{ padding: '10px', maxWidth: '900px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center', fontSize:'50px', fontWeight:'bolder', paddingBottom:'20px' }}>About Our Electrical Services</h2>
        <p style={{ fontSize:'18px', textAlign: 'justify', lineHeight: '1.6'}}>
            We provide complete electrical solutions for homes, offices, and industrial spaces in Chennai. Our services include new wiring, rewiring, DB panel setup, earthing, UPS installation, and appliance fitting. Whether you’re constructing a new space or renovating, our certified electricians ensure neat, code-compliant, and future-ready installations. We handle residential switchboard setups, commercial lighting automation, and heavy-load industrial panel work. From ceiling fan installation to transformer connections, no job is too small or complex. We also offer AMC and emergency support. With a focus on safety, durability, and energy efficiency, we power your space with trusted electrical craftsmanship.
        </p>
        {/* <p style={{fontFamily:'poppins', fontSize:'20px', textAlign: 'justify', lineHeight: '1.6'}}>
           
        </p> */}
    </div>
);    
}




const cameraData = [
    {
        id: 1,
        title: '🏠 Residential Electrical Works',
        description: 'We provide full electrical solutions for homes—wiring, switchboard installation, fan/light fitting, inverter wiring, and DB box setup. Safe, neat, and future-proof electrical systems for modern households.',
        imageUrl: '/assets/images/electrical/ResidentialElectrialWorks.jpeg',
    },
    {
        id: 2,
        title: '🏢 Commercial Electrical Works',
        description: 'From retail outlets to office buildings, we handle commercial wiring, lighting automation, UPS setup, and load distribution with high safety and performance standards.',
        imageUrl: '/assets/images/electrical/CommercialElectricalWorks.jpeg',
    },
    {
        id: 3,
        title: '🏭 Industrial Electrical Services',
        description: 'Heavy-duty electrical works like HT/LT panel installations, earthing systems, industrial motor connections, and transformer wiring, all handled with expert engineering practices.',
        imageUrl: '/assets/images/electrical/IndustrialElectricalServices.jpeg',
    },
    {
        id: 4,
        title: '💡 Lighting & Fitting Installation',
        description: 'We install ceiling lights, decorative fittings, tube lights, panel lights, LED spotlights, and chandeliers. Interior and exterior lighting done with aesthetic focus and power efficiency.',
        imageUrl: '/assets/images/electrical/LightingFittingInstallation.jpeg',
    },
    {
        id: 5,
        title: '🔌 Wiring & Cabling',
        description: 'New wiring for homes, rewiring for old buildings, structured cabling, LAN wiring, and concealed wiring are done with ISI-standard materials and professional tools.',
        imageUrl: '/assets/images/electrical/WiringCablins.jpeg',
    },
    {
        id: 6,
        title: '🧰 Electrical Panel Setup',
        description: 'We install and maintain main distribution boards, sub-panels, circuit breakers, and RCCBs for residential, commercial, and industrial projects with 100% safety compliance.',
        imageUrl: '/assets/images/electrical/ElectricalPanelSetup.jpeg',
    },
    {
        id: 7,
        title: '🌩️ Earthing & Surge Protection',
        description: 'Get solid earthing, lightning arrestors, and surge protectors installed to avoid electrical shocks, damage to appliances, and fire risks.',
        imageUrl: '/assets/images/electrical/EarthingSurgeProtection.jpeg',
    },
    {
        id: 8,
        title: '🔧 Electrical Repair & Maintenance',
        description: 'From short-circuit issues to switch replacements, we provide on-demand troubleshooting, AMC (Annual Maintenance Contracts), and quick repair services.',
        imageUrl: '/assets/images/electrical/ElectricalRepairMaintenance.jpeg',
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
                Types of Electrical Services We Provide
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
    title: 'Why Choose Us for Electrical Works – All Types',
    bullets: [
        '✅Certified & Experienced Electricians Our licensed professionals bring years of experience in handling residential, commercial, and industrial electrical projects safely and efficiently.',
        '✅From wiring, rewiring, and switchboards to DB panels, UPS systems, and earthing—we do it all under one roof.',
        '✅We strictly follow BIS and IEC safety standards to ensure shock-proof, fire-safe, and long-lasting electrical setups.',
        '✅We complete projects on schedule with neat, damage-free installations that blend with your space.',
        '✅Need quick fixes or long-term maintenance? Our team is ready with same-day service and custom AMC plans.',
    ],
    imageUrl: '/assets/images/whychoose/Electricalworks.jpeg', // replace with your image path
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


// const Button =()=> {
//   return (
//     <button
//       style={{
//         display: 'block',
//         margin: '20px auto',
//         padding: '10px 20px',
//         backgroundColor: '#007BFF',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         fontSize: '16px',
//         transition: 'background-color 0.3s ease',
//       }}
//       onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
//       onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007BFF')}
//     >
//       Get a Free Quote
//     </button>
//   );
// }











const Electrical = () => {
  return (
    <div>
      <Banner />
      <Description />
      <CameraGrid />
      <ProductsOffer />
      <WhyChooseUs />
      {/* <Button /> */}
      <Footer />
      {/* Other content for the service page */}
    </div>
  );
};

export default Electrical;
