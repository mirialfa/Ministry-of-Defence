// OrderSummaryPage.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import Success from './Success';

const OrderSummaryPage = () => {
  const cart = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    email: '',
  });
  const [successfully, setSuccess] = useState(false);

//   const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleConfirmOrder = () => {
    // Perform validation on form data if needed

    // Create an object to send to the server
    const orderData = {
        name: formData.fullName,
        address: formData.address,
        email: formData.email,
        items: JSON.stringify(cart),
    };

    // Assuming you have an API endpoint to send the order data
    fetch('https://localhost:7277/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success (you may redirect to a thank you page)
        setSuccess(true);
        console.log('Order submitted successfully:', data);
        // Clear the cart after placing the order
        // dispatch(clearCart());
        // Redirect to a thank you page or any other page
        // history.push('/thank-you');
      })
      .catch((error) => {
        // Handle error
        console.error('Error submitting order:', error);
      });
  };

  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity || 1}
          </li>
        ))}
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
