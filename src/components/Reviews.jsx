import React, { useEffect, useState } from 'react';

const GoogleReviews =()=> {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/api/google-reviews') // your backend proxy or API endpoint
      .then(res => res.json())
      .then(data => setReviews(data.reviews))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Google Reviews</h2>
      {reviews.length === 0 ? (
        <p>Loading reviews...</p>
      ) : (
        reviews.map((r) => (
          <div key={r.id} className="border p-4 mb-4 rounded shadow">
            <p className="font-semibold">{r.author_name}</p>
            <p>{r.text}</p>
            <p className="text-sm text-gray-500">{r.relative_time_description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default GoogleReviews;
