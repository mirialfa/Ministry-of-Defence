import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Success from './Success';
import ShoppingCart from './ShoppingCart'

const OrderSummaryPage = () => {
  const cart = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    email: '',
  });
  const [successfully, setSuccess] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleConfirmOrder = () => {
    const orderData = {
        name: formData.fullName,
        address: formData.address,
        email: formData.email,
        items: JSON.stringify(cart),
    };

    fetch('https://localhost:7277/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((data) => {
        setSuccess(true);
        console.log('Order submitted successfully:', data);
      })
      .catch((error) => {
        console.error('Error submitting order:', error);
      });
  };

  return (
    <div >
      <h2>סיכום הזמנה</h2>
      <ul>
        <ShoppingCart/>
      </ul>
      <h2>Personal Details</h2>
      <form>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.firstName} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </label>
        <br />
      </form>
      <button onClick={handleConfirmOrder}>Confirm Order</button>
      <Success success={successfully} />

    </div>
  );
};

export default OrderSummaryPage;
