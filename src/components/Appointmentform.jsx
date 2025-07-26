import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    branch: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycby8rfH4B2wCpVM5xYL9K3LVbG4i08Q9uI-0DnUrS18wD8Bk84-V_FAqPQB2p01yW42Chw/exec";
    const form = new FormData();

    for (let key in formData) {
      form.append(key, formData[key]);
    }

    fetch(scriptURL, { method: 'POST', body: form })
      .then(() => alert('Appointment booked successfully!'))
      .catch(error => alert('Error!', error.message));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        flex: 1,
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
        />
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
        />
      </div>

      <div>
        <label htmlFor="date">Preferred Date</label>
        <input
          type="date"
          id="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
        />
      </div>

      <div>
        <label htmlFor="branch">Select Branch</label>
        <select
          id="branch"
          name="branch"
          required
          value={formData.branch}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
        >
          <option value="" disabled>Select Branch</option>
          <option value="branch1">Velachery</option>
          <option value="branch2">Branch 2</option>
          <option value="branch3">Branch 3</option>
        </select>
      </div>

      <div>
        <label htmlFor="notes">Additional Notes</label>
        <textarea
          id="notes"
          name="notes"
          rows="3"
          value={formData.notes}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
        ></textarea>
      </div>

      <button
        type="submit"
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Book Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
