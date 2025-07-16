import React, { useState } from 'react';
import { FaRupeeSign, FaStar, FaUsers, FaHeadset,  } from 'react-icons/fa';
import Footer from '../components/Footer';

const Banner = () => {
  return (
    <div style={{
      backgroundImage: 'url("/assets/images/banners/ComputersystemHardwareBanner.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '500px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
    }}>
      <h1 style={{fontWeight:'bolder', fontSize:'50px'}}>Hardware Services</h1>
    </div>
  );
};
const Description = () => {
return (  
    <div style={{ padding: '10px', maxWidth: '900px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center', fontSize:'50px', fontWeight:'bolder', paddingBottom:'20px' }}>About Our Hardware Services</h2>
        <p style={{ fontSize:'18px', textAlign: 'justify', lineHeight: '1.6'}}>
            Get reliable, high-performance computer hardware solutions tailored to your needs. We supply and install desktops, motherboards, CPUs (Intel/AMD), RAM, SSDs, GPUs, power supplies, and more. Whether you're upgrading a gaming PC, building a business workstation, or repairing an existing system, our experts recommend and install components that fit your purpose and budget. We stock branded parts with warranty and offer complete setup, testing, and performance optimization. Need support? Our service extends to troubleshooting, replacements, and accessories like monitors, keyboards, and UPS systems. Choose us for quality computer hardware services in Chennai that keep you running without interruptions.
        </p>
        {/* <p style={{fontFamily:'poppins', fontSize:'20px', textAlign: 'justify', lineHeight: '1.6'}}>
           
        </p> */}
    </div>
);    
}




const cameraData = [
    {
        id: 1,
        title: '🧠 Motherboards',
        description: 'The backbone of every computer, motherboards connect all hardware components. We provide compatible boards for Intel and AMD systems, ideal for gaming, business, or home use.',
        imageUrl: '/assets/images/hardwares/Motherboards.jpeg',
    },
    {
        id: 2,
        title: '⚙️ Processors (CPU)',
        description: 'Choose from top brands like Intel Core i3/i5/i7 and AMD Ryzen for reliable computing power. Perfect for multitasking, office work, and high-performance tasks.',
        imageUrl: '/assets/images/hardwares/ProcessorsCPU.jpeg',
    },
    {
        id: 3,
        title: '💾 RAM (Memory)',
        description: 'Speed up your PC with DDR4/DDR5 RAM from 4GB to 64GB. Boost performance for gaming, editing, and everyday operations with trusted brands like Corsair, Kingston, and Crucial.',
        imageUrl: '/assets/images/hardwares/RAMMemory.jpeg',
    },
    {
        id: 4,
        title: '📀 Hard Drives (HDD & SSD)',
        description: 'Store more, load faster. We offer high-capacity HDDs for storage and fast SSDs (SATA & NVMe) for quick boot times and file access.',
        imageUrl: '/assets/images/hardwares/HardDrivesHDDSSD.jpeg',
    },
    {
        id: 5,
        title: '🔋 Power Supply (SMPS)',
        description: 'Stable power is crucial. We provide 450W–850W SMPS units with overvoltage and surge protection to ensure consistent performance and long hardware life.',
        imageUrl: '/assets/images/hardwares/PowerSupplySMP.jpeg',
    },
    {
        id: 6,
        title: '🖥️ Monitors',
        description: 'From 19-inch LED screens to 32-inch curved 4K displays, we have monitors for coding, gaming, design, and day-to-day office tasks.',
        imageUrl: '/assets/images/hardwares/MonitorsCPU.jpeg',
    },
    {
        id: 7,
        title: '⌨️ Keyboard & Mouse',
        description: 'Ergonomic, wireless, mechanical, or RGB—we offer complete input device kits for home, gaming, or professional setups.',
        imageUrl: '/assets/images/hardwares/KeyboardMouse.jpeg',
    },
    {
        id: 8,
        title: '🎮 Graphic Cards (GPU)',
        description: 'Get high-performance GPUs for gaming, video editing, 3D rendering, or AI. We stock NVIDIA and AMD cards suitable for all budgets.',
        imageUrl: '/assets/images/hardwares/GraphicCardsGPU.jpeg',
    },
     {
        id: 9,
        title: '❄️ Cooling Fans & Heat Sinks',
        description: 'Prevent overheating with efficient cooling systems—case fans, CPU coolers, and liquid cooling options for high-end rigs.',
        imageUrl: '/assets/images/hardwares/CoolingFansHeatSink.jpeg',
    },
    {
        id: 10,
        title: '🔌 UPS & Power Backup',
        description: 'Protect your system from power cuts with branded UPS systems (600VA–2KVA) for smooth operation and data protection.',
        imageUrl: '/assets/images/hardwares/UPSPowerBackup.jpeg',
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
                Types of Hardware Services We Provide
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
    title: 'Why Choose Our Hardware Products',
    bullets: [
        '✅From motherboards and processors to SSDs, RAM, GPUs, and monitors—we provide everything you need for desktops and workstations.',
        '✅Whether you are a gamer, designer, or business owner, we build systems that match your performance and budget goals.',
        '✅Genuine, Branded Components Only We deal with 100% original hardware from top brands like Intel, AMD, Corsair, Kingston, WD, and ASUS—no clones, no compromises.',
        '✅Our technicians assemble, install, and test every part for compatibility, speed, and stability before delivery.',
        '✅We not only install but also optimize systems for speed, thermal management, and multitasking.',
    ],
    imageUrl: '/assets/images/whychoose/ComputersystemHardware.jpeg', // replace with your image path
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











const Hardware = () => {
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

export default Hardware;
