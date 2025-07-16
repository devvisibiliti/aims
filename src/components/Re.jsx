import React, { useEffect, useState } from 'react';

const GOOGLE_API_KEY = 'AIzaSyB3_seTGPaYPRjMd8cw5QfFE2HzngeqyMc';  // Replace with your actual API key
const PLACE_ID = 'ChIJm_1WbERnUjoRTJSVIABJSiY';

function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${GOOGLE_API_KEY}`
    )
      .then(response => response.json())
      .then(data => {
        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        } else {
          setError('No reviews found.');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch reviews.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Google Reviews for Visibiliti</h2>
      {reviews.map((review, index) => (
        <div key={index} style={{marginBottom: '1em', padding: '1em', border: '1px solid #ccc'}}>
          <p><strong>{review.author_name}</strong> — {review.rating} ⭐</p>
          <p>{review.text}</p>
          <p><small>{new Date(review.time * 1000).toLocaleDateString()}</small></p>
        </div>
      ))}
    </div>
  );
}

export default GoogleReviews;
