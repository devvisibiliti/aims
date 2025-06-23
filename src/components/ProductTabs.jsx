// src/components/ProductTabs.jsx
import React, { useState } from 'react';

const products = {
  Hardware: ['Product A', 'Product B', 'Product C'],
  Software: ['Product D', 'Product E', 'Product F'],
  Services: ['Product G', 'Product H', 'Product I'],
};

 const ProductTabs =() =>{
  const [activeTab, setActiveTab] = useState('Hardware');

  return (
    <div id="products" className="my-12 max-w-5xl mx-auto p-4">
      <div className="flex space-x-4 mb-6">
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
      <ul className="list-disc list-inside">
        {products[activeTab].map((item) => (
          <li key={item} className="py-1">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductTabs;
