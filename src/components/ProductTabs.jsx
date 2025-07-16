// src/components/ProductTabs.jsx
import React, { useState } from 'react';

const products = {
  CCTV: [
    {
      id: 'productA',
      title: '📷 Table Top CCTV',
      description: 'Compact cameras for desk or shelf use',
      image: '/assets/images/home/cctv1.png',
      link: '#hardwareA',
    },
    {
      id: 'productB',
      title: '📡 Wireless CCTV',
      description: 'No wiring, easy to install anywhere',
      image: '/assets/images/home/cctv2.png',
      link: '#hardwareB',
    },
    {
      id: 'productC',
      title: '🌐 WiFi CCTV',
      description: 'Live view on phone via WiFi',
      image: '/assets/images/home/cctv3.png',
      link: '#hardwareC',
    },
  ],
  Networking: [
    {
      id: 'productD',
      title: '🌐 System Networking',
      description: 'Connects servers, devices for data sharing',
      image: '/assets/images/home/Systemnetworking.jpeg',
      link: '#softwareD',
    },
    {
      id: 'productE',
      title: '🏢 Commercial Networking',
      description: 'Reliable network setup for business operations',
      image: '/assets/images/home/Commercialnetworking.jpeg',
      link: '#softwareE',
    },
    {
      id: 'productF',
      title: '🏠 Home-Based Networking',
      description: 'Smooth internet across all home devices',
      image: '/assets/images/home/Homebasednetworking.jpeg',
      link: '#softwareF',
    },
  ],
  SecuritySystems: [
    {
      id: 'productG',
      title: '🛡️ Security System ',
      description: 'Smart protection for homes and businesses',
      image: '/assets/images/home/SecuritySystemCommercialHomeBased.jpeg',
      link: '#servicesG',
    },
    {
      id: 'productH',
      title: '🔐 Door Locks',
      description: 'Advanced keyless and smart locking systems',
      image: '/assets/images/home/DoorLocks.jpeg',
      link: '#servicesH',
    },
    {
      id: 'productI',
      title: '🏢 Commercial Needs',
      description: 'End-to-end safety for office premises',
      image: '/assets/images/home/Commercialneeds.jpeg',
      link: '#servicesI',
    },
  ],
   ElectricalWorks: [
    {
      id: 'productG',
      title: '🏠 Residential Electrical Works ',
      description: 'Complete home wiring and appliance installation',
      image: '/assets/images/home/ResidentialElectricalWorks.jpeg',
      link: '#servicesG',
    },
    {
      id: 'productH',
      title: '🏢 Commercial Electrical Works',
      description: 'Safe electrical setup for business spaces',
      image: '/assets/images/home/CommercialElectricalWorks.jpeg',
      link: '#servicesH',
    },
    {
      id: 'productI',
      title: '🏭 Industrial Electrical Services',
      description: 'Heavy-load wiring and industrial power systems',
      image: '/assets/images/home/IndustrialElectricalServices.jpeg',
      link: '#servicesI',
    },
  ],
   ComputerHardware: [
    {
      id: 'productG',
      title: '🧠 Motherboards ',
      description: 'Connects all components for system performance',
      image: '/assets/images/home/SecuritySystemCommercialHomeBased.jpeg',
      link: '#servicesG',
    },
    {
      id: 'productH',
      title: '⚙️ Processors (CPU)',
      description: 'Powerful multitasking with Intel or AMD',
      image: '/assets/images/home/DoorLocks.jpeg',
      link: '#servicesH',
    },
    {
      id: 'productI',
      title: '💾 RAM (Memory)',
      description: 'Boost speed for gaming and productivity',
      image: '/assets/images/home/Commercialneeds.jpeg',
      link: '#servicesI',
    },
  ],
  ComputerSoftware: [
    {
      id: 'productG',
      title: '🖥️ Operating Systems (OS)',
      description: 'Genuine OS for Windows, Linux, Mac',
      image: '/assets/images/home/SecuritySystemCommercialHomeBased.jpeg',
      link: '#servicesG',
    },
    {
      id: 'productH',
      title: '📦 Productivity Software',
      description: 'Office tools for work, school, business',
      image: '/assets/images/home/DoorLocks.jpeg',
      link: '#servicesH',
    },
    {
      id: 'productI',
      title: '🛡️ Antivirus & Security Software',
      description: 'Real-time protection with licensed antivirus tools',
      image: '/assets/images/home/Commercialneeds.jpeg',
      link: '#servicesI',
    },
  ],
};

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('CCTV');

  return (
    <div id="products" className="my-12 max-w-5xl mx-auto p-4">
      <div className="flex justify-center space-x-4 mb-6">
        {Object.keys(products).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded text-lg ${
              activeTab === tab ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 '
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products[activeTab].map(({ id, title, description, image, link }) => (
          <div key={id} className="border rounded-lg p-4 flex flex-col items-center text-center">
            <img src={image} alt={title} className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 text-base">{description}</p>
            <a
              href={link}
              className="mt-auto inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-base"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;
