import React, { useState } from 'react';
import { FaRupeeSign, FaStar, FaUsers, FaHeadset,  } from 'react-icons/fa';
import Footer from '../components/Footer';

const Banner = () => {
  return (
    <div style={{
      backgroundImage: 'url("/assets/images/banners/SecuritysystemBanner.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '500px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
    }}>
      <h1 style={{fontWeight:'bolder', fontSize:'50px'}}>Security Services</h1>
    </div>
  );
};
const Description = () => {
return (  
    <div style={{ padding: '10px', maxWidth: '900px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center', fontSize:'50px', fontWeight:'bolder', paddingBottom:'20px' }}>About Our Security Services</h2>
        <p style={{fontFamily:'poppins', fontSize:'20px', textAlign: 'justify', lineHeight: '1.6'}}>
            Secure what matters most with our complete range of security systems for residential and commercial use. From smart door locks and access control to fire alarms and 24/7 surveillance, we provide fully customized setups. For homes, we offer discreet wireless alarms, door/window sensors, and app-controlled cameras. For businesses, our solutions include biometric access control, CCTV networks, fire detection units, and motion-based alert systems. Every installation is backed by expert consultation, quality equipment, and responsive support. Whether you're protecting your family or your workspace, our security systems in Chennai deliver the reliability and safety you need every day.
            
        </p>
        {/* <p style={{fontFamily:'poppins', fontSize:'20px', textAlign: 'justify', lineHeight: '1.6'}}>
           
        </p> */}
    </div>
);    
}




const cameraData = [
    {
        id: 1,
        title: '🛡️ Security System (Commercial/Home-Based)',
        description: 'Our security systems are tailored for both commercial buildings and homes. Whether you need 24/7 monitoring, integrated smart tech, or physical security upgrades, we ensure total protection and peace of mind.',
        imageUrl: '/assets/images/security/SecuritySystemCommercialHomeBased.jpeg',
    },
    {
        id: 2,
        title: '🔐 Door Locks',
        description: 'Upgrade your entry points with advanced door locks—digital, biometric, or RFID-enabled. Our solutions prevent unauthorized access and give you full control from anywhere.',
        imageUrl: '/assets/images/security/DoorLocks.jpeg',
    },
    {
        id: 3,
        title: '🚪 Door Needs',
        description: 'We provide heavy-duty doors, smart access panels, and reinforced frames suited for both aesthetic appeal and security-grade protection in homes and commercial spaces.',
        imageUrl: '/assets/images/security/DoorNeeds.jpeg',
    },
    {
        id: 4,
        title: '🏢 Commercial Needs',
        description: 'From multi-level access control to centralized surveillance, our commercial security systems safeguard offices, showrooms, warehouses, and institutions with precision and reliability.',
        imageUrl: '/assets/images/security/CommercialNeeds.jpeg',
    },
    {
        id: 5,
        title: '🧰 Lockers',
        description: 'Protect your valuables with tamper-proof lockers for both homes and offices. Fire-resistant, password-protected, and custom-sized options are available for personal or professional use.',
        imageUrl: '/assets/images/security/Lockers.jpeg',
    },
    {
        id: 6,
        title: '🔑 Access Control',
        description: 'Control who enters and when. Our access control systems include biometric scanners, RFID card systems, face recognition, and mobile app integration for smart access.',
        imageUrl: '/assets/images/security/AccessControl.jpeg',
    },
    {
        id: 7,
        title: '🚨 Alarm System',
        description: 'Our intrusion and emergency alarm systems alert you instantly of unauthorized activity or danger—backed by real-time monitoring and mobile notifications.',
        imageUrl: '/assets/images/security/AlarmSystem.jpeg',
    },
    {
        id: 8,
        title: '🎥 Surveillance',
        description: 'Monitor every corner with high-resolution CCTV cameras, motion sensors, and night vision—all accessible through cloud-based apps and multi-user platforms.',
        imageUrl: '/assets/images/security/Surveillance.jpeg',
    },
    {
        id: 9,
        title: '🚪💨 Door & Window Alarm System',
        description: 'Stay alert with sensors that detect door or window breaches. Perfect for ground floors, balconies, and entry points in both residential and commercial areas.',
        imageUrl: '/assets/images/security/DoorWindowAlarmSystem.jpeg',
    },
    {
        id: 10,
        title: '🔥 Fire Detection',
        description: 'Protect lives and assets with early fire detection systems. We offer smoke detectors, heat sensors, and automated sprinkler alerts for total fire safety compliance.',
        imageUrl: '/assets/images/security/FireDetectior.jpeg',
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
                Types of Security Services We Provide
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
    title: 'Why Choose Our Security Systems',
    bullets: [
        '✅ Comprehensive Protection We integrate CCTV, smart locks, access control, alarms, and fire detection into one seamless security ecosystem.',
        '✅ Every installation is custom-designed—discreet wireless kits for homes, enterprise-grade networks for offices, factories, and retail outlets.',
        '✅ Our technicians hold industry certifications and follow IS/IEC safety standards, ensuring accurate setup and maximum reliability.',
        '✅ Enjoy round-the-clock surveillance with real-time mobile alerts plus rapid on-site assistance anywhere in Chennai.',
        '✅ We deploy AI motion detection, biometric access, and cloud-based storage—scalable for tomorrow’s security demands.',
    ],
    imageUrl: '/assets/images/whychoose/Securitysystem.jpeg', // replace with your image path
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











const Security = () => {
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

export default Security;
