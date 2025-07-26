// src/components/ProductTabs.jsx
import React, { useState } from 'react';

const products = {
  CCTV: [
    {
      id: 'productA',
      title: '📷 Table Top CCTV',
      description: 'Compact cameras for desk or shelf use',
      image: '/assets/images/home/cctv1.png',
      link: '/cctv',
      link1:'/cctv'
    },
    {
      id: 'productB',
      title: '📡 Wireless CCTV',
      description: 'No wiring, easy to install anywhere',
      image: '/assets/images/home/cctv2.png',
      link: '/cctv',
      link1:'/cctv'
    },
    {
      id: 'productC',
      title: '🌐 WiFi CCTV',
      description: 'Live view on phone via WiFi',
      image: '/assets/images/home/cctv3.png',
      link: '/cctv',
      link1:'/cctv'
    },
  ],
  Networking: [
    {
      id: 'productD',
      title: '🌐 System Networking',
      description: 'Connects servers, devices for data sharing',
      image: '/assets/images/home/Systemnetworking.jpeg',
      link: '/networking',
      link1:'/networking'
    },
    {
      id: 'productE',
      title: '🏢 Commercial Networking',
      description: 'Reliable network setup for business operations',
      image: '/assets/images/home/Commercialnetworking.jpeg',
      link: '/networking',
      link1:'/networking'

    },
    {
      id: 'productF',
      title: '🏠 Home-Based Networking',
      description: 'Smooth internet across all home devices',
      image: '/assets/images/home/Homebasednetworking.jpeg',
      link: '/networking',
      link1:'/networking'
    },
  ],
  SecuritySystems: [
    {
      id: 'productG',
      title: '🛡️ Security System ',
      description: 'Smart protection for homes and businesses',
      image: '/assets/images/home/SecuritySystemCommercialHomeBased.jpeg',
      link: '/security',
      link1:'/security'
    },
    {
      id: 'productH',
      title: '🔐 Door Locks',
      description: 'Advanced keyless and smart locking systems',
      image: '/assets/images/home/DoorLocks.jpeg',
      link: '/security',
    },
    {
      id: 'productI',
      title: '🏢 Commercial Needs',
      description: 'End-to-end safety for office premises',
      image: '/assets/images/home/Commercialneeds.jpeg',
      link: '/security',
    },
  ],
   ElectricalWorks: [
    {
      id: 'productG',
      title: '🏠 Residential Electrical Works ',
      description: 'Complete home wiring and appliance installation',
      image: '/assets/images/home/ResidentialElectricalWorks.jpeg',
      link: '/electrical',
      link1:'/electrical'
    },
    {
      id: 'productH',
      title: '🏢 Commercial Electrical Works',
      description: 'Safe electrical setup for business spaces',
      image: '/assets/images/home/CommercialElectricalWorks.jpeg',
      link: '/electrical',
    },
    {
      id: 'productI',
      title: '🏭 Industrial Electrical Services',
      description: 'Heavy-load wiring and industrial power systems',
      image: '/assets/images/home/IndustrialElectricalServices.jpeg',
      link: '/electrical',
    },
  ],
   ComputerHardware: [
    {
      id: 'productG',
      title: '🧠 Motherboards ',
      description: 'Connects all components for system performance',
      image: '/assets/images/home/SecuritySystemCommercialHomeBased.jpeg',
      link: '/hardware',
      link1:'/hardware'
    },
    {
      id: 'productH',
      title: '⚙️ Processors (CPU)',
      description: 'Powerful multitasking with Intel or AMD',
      image: '/assets/images/home/DoorLocks.jpeg',
      link: '/hardware',
    },
    {
      id: 'productI',
      title: '💾 RAM (Memory)',
      description: 'Boost speed for gaming and productivity',
      image: '/assets/images/home/Commercialneeds.jpeg',
      link: '/hardware',
    },
  ],
  ComputerSoftware: [
    {
      id: 'productG',
      title: '🖥️ Operating Systems (OS)',
      description: 'Genuine OS for Windows, Linux, Mac',
      image: '/assets/images/home/SecuritySystemCommercialHomeBased.jpeg',
      link: '/software',
      link1:'/software'
    },
    {
      id: 'productH',
      title: '📦 Productivity Software',
      description: 'Office tools for work, school, business',
      image: '/assets/images/home/DoorLocks.jpeg',
      link: '/software',
    },
    {
      id: 'productI',
      title: '🛡️ Antivirus & Security Software',
      description: 'Real-time protection with licensed antivirus tools',
      image: '/assets/images/home/Commercialneeds.jpeg',
      link: '/software',
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

      {/* Show only one "Learn More---" link per tab if link1 exists in any product */}
      {products[activeTab].some(p => p.link1) && (
        <div className="mt-6 flex justify-center">
          <a
            href={products[activeTab].find(p => p.link1)?.link1}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-base"
          >
            Learn More
          </a>
        </div>
      )}
    </div>
  );
};

export default ProductTabs;
