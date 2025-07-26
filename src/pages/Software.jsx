import React, { useState } from 'react';
import { FaRupeeSign, FaStar, FaUsers, FaHeadset,  } from 'react-icons/fa';
import Footer from '../components/Footer';

const Banner = () => {
  return (
    <div style={{
      backgroundImage: 'url("/assets/images/banners/ComputersystemsoftwareBanner.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '500px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
    }}>
      <h1 style={{fontWeight:'bolder', fontSize:'50px'}}>Software Services</h1>
    </div>
  );
};
const Description = () => {
return (  
    <div style={{ padding: '10px', maxWidth: '900px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center', fontSize:'50px', fontWeight:'bolder', paddingBottom:'20px' }}>About Our Software Services</h2>
        <p style={{ fontSize:'18px', textAlign: 'justify', lineHeight: '1.6'}}>
            We provide end-to-end software solutions for homes, offices, and institutions. Our offerings include licensed installations of Windows 10/11, MS Office 365, antivirus programs (Quick Heal, Kaspersky, Norton), and design software like Adobe, AutoCAD, and CorelDRAW. We ensure proper installation, activation, and update configuration for smooth, secure operation. Whether you're setting up new systems or upgrading old ones, we help select the right software for your needs. We also assist with cloud tools like Google Workspace and offer custom CRM, accounting, and utility installations. All services are genuine and supported by our professional team in Chennai.
        </p>
        {/* <p style={{fontFamily:'poppins', fontSize:'20px', textAlign: 'justify', lineHeight: '1.6'}}>
           
        </p> */}
    </div>
);    
}




const cameraData = [
    {
        id: 1,
        title: '🖥️ Operating Systems (OS)',
        description: 'We provide licensed operating systems including: Windows 10 / 11 (Home & Pro)Linux (Ubuntu, Red Hat, CentOS)MacOS support for Apple systems Secure, fast, and regularly updated for personal, business, or institutional use.',
        imageUrl: '/assets/images/software/OperatingSystemsOS.jpeg',
    },
    {
        id: 2,
        title: '📦 Productivity Software',
        description: 'Boost efficiency with industry-standard tools like: Microsoft Office 365 (Word, Excel, PowerPoint, Outlook)Google Workspace Setup (Docs, Sheets, Gmail, Meet) LibreOffice for open-source users Perfect for professionals, students, and business users.',
        imageUrl: '/assets/images/software/ProductivitySoftware.jpeg',
    },
    {
        id: 3,
        title: '🛡️ Antivirus & Security Software',
        description: 'Protect your system with genuine security solutions: Quick Heal, Kaspersky, Norton, Bitdefender Firewall configuration & ransomware protection We ensure real-time scanning, updates, and license activation.',
        imageUrl: '/assets/images/software/AntivirusSecuritySoftware.jpeg',
    },
     {
        id: 4,
        title: '🎨 Design & Editing Software',
        description: 'For creators and professionals: Adobe Photoshop, Illustrator, Premiere Pro CorelDRAW, AutoCAD, SketchUp, Final Cut Pro Licensed installation and support for high-performance machines.',
        imageUrl: '/assets/images/software/DesignEditingSoftware.jpeg',
    },
     {
        id: 5,
        title: '🧰 Utility & Maintenance Software',
        description: 'Ensure smooth operation with: Disk cleanup tools Driver update software Backup & recovery systems (Acronis, Macrium Reflect) Ideal for long-term system health and optimization.',
        imageUrl: '/assets/images/software/UtilityMaintenanceSoftware.jpeg',
    },
     {
        id: 6,
        title: '🔧 Custom Software Installation',
        description: 'We provide setup, activation, and configuration for: Accounting software (Tally Prime, Zoho Books) HR & Payroll systems CRM/ERP applications Tailored for your business size and workflow.',
        imageUrl: '/assets/images/software/CustomSoftwareInstallation.jpeg',
    },
     {
        id: 7,
        title: '🧑‍💼 Licensed Software Consulting & Support',
        description: 'Confused about what to buy? Our team helps you choose the right software license, manage activation keys, renewals, and provide post-installation tech support.',
        imageUrl: '/assets/images/software/LicensedSoftwareConsultingSupport.jpeg',
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
                Types of Software Services We Provide
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
    title: 'Why Choose Software Products',
    bullets: [
        '✅Genuine & Licensed Software Only We provide 100% original software with activation support — including Windows OS, Microsoft Office, antivirus, and design tools.',
        '✅Complete Setup & Configuration From installation to updates and security settings, we ensure your software runs smoothly and safely from day one.',
        '✅System Security & Data Protection We install firewalls, antivirus, and malware protection to safeguard your system from cyber threats and data loss.',
        '✅Business & Productivity Software Need Tally, AutoCAD, Adobe Suite, or Google Workspace? We’ve got it all — ready for home, business, or institutional use.',
        '✅Tailored Software Packages Whether you are a student, startup, or large company, we install software that fits your needs and device capacity.',
    ],
    imageUrl: '/assets/images/whychoose/Computersystemsoftware.jpeg', // replace with your image path
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











const Software = () => {
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

export default Software;
