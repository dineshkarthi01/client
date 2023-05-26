import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserCart.css';

const UserCart = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    contactNumber: '',
    whatsappNumber: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform secure submission of form data
    // You can use a secure API or encryption methods here

    // Reset the form fields
    setFormData({
      name: '',
      place: '',
      contactNumber: '',
      whatsappNumber: ''
    });

    // Redirect to a success page or any other desired route
    navigate('/success');
  };

  return (
    <div className="user-cart-container">
      <h2>User Cart</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Place:
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Contact Number:
          <input
            type="tel"
            name="contactNumber"
            pattern="[0-9]{10}"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          WhatsApp Number:
          <input
            type="tel"
            name="whatsappNumber"
            pattern="[0-9]{10}"
            value={formData.whatsappNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserCart;
