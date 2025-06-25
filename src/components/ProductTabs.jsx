// src/components/ProductTabs.jsx
import React, { useState } from 'react';

const products = {
  Hardware: [
    {
      id: 'productA',
      title: 'Product A',
      description: 'High-quality hardware product A.',
      image: '/images/productA.jpg',
      link: '#hardwareA',
    },
    {
      id: 'productB',
      title: 'Product B',
      description: 'Durable and reliable product B.',
      image: '/images/productB.jpg',
      link: '#hardwareB',
    },
    {
      id: 'productC',
      title: 'Product C',
      description: 'Affordable and efficient product C.',
      image: '/images/productC.jpg',
      link: '#hardwareC',
    },
  ],
  Software: [
    {
      id: 'productD',
      title: 'Product D',
      description: 'Innovative software solution D.',
      image: '/images/productD.jpg',
      link: '#softwareD',
    },
    {
      id: 'productE',
      title: 'Product E',
      description: 'Easy to use software E.',
      image: '/images/productE.jpg',
      link: '#softwareE',
    },
    {
      id: 'productF',
      title: 'Product F',
      description: 'Robust and scalable software F.',
      image: '/images/productF.jpg',
      link: '#softwareF',
    },
  ],
  Services: [
    {
      id: 'productG',
      title: 'Product G',
      description: 'Professional service G.',
      image: '/images/productG.jpg',
      link: '#servicesG',
    },
    {
      id: 'productH',
      title: 'Product H',
      description: 'Reliable service H.',
      image: '/images/productH.jpg',
      link: '#servicesH',
    },
    {
      id: 'productI',
      title: 'Product I',
      description: 'Affordable service I.',
      image: '/images/productI.jpg',
      link: '#servicesI',
    },
  ],
};

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('Hardware');

  return (
    <div id="products" className="my-12 max-w-5xl mx-auto p-4">
      <div className="flex justify-center space-x-4 mb-6">
        {Object.keys(products).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
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
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a
              href={link}
              className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
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
