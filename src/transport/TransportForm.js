import React, { useState } from 'react';
import './TransportForm.css';

const TransportForm = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderName, setOrderName] = useState('');
  const [orderPlace, setOrderPlace] = useState('');
  const [orderAmount, setOrderAmount] = useState('');
  const [acknowledgementNumber, setAcknowledgementNumber] = useState('');
  const [isAmountReceived, setIsAmountReceived] = useState(false);
  const [isAmountNotReceived, setIsAmountNotReceived] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
  };

  return (
    <div className="transport-form-container">
      <h2>Transport Delivery Form</h2>
      <form className="transport-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="orderNumber">Order Number:</label>
          <input
            type="text"
            id="orderNumber"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="orderName">Order Name:</label>
          <input
            type="text"
            id="orderName"
            value={orderName}
            onChange={(e) => setOrderName(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="orderPlace">Order Place:</label>
          <input
            type="text"
            id="orderPlace"
            value={orderPlace}
            onChange={(e) => setOrderPlace(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="orderAmount">Order Amount:</label>
          <input
            type="number"
            id="orderAmount"
            value={orderAmount}
            onChange={(e) => setOrderAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="acknowledgementNumber">Acknowledgement Number:</label>
          <input
            type="text"
            id="acknowledgementNumber"
            value={acknowledgementNumber}
            onChange={(e) => setAcknowledgementNumber(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Amount Received:</label>
          <div>
            <input
              type="checkbox"
              id="amountReceived"
              checked={isAmountReceived}
              onChange={() => setIsAmountReceived(!isAmountReceived)}
            />
            <label htmlFor="amountReceived">Received</label>
          </div>
        </div>
        <div className="form-row">
          <label>Amount Not Received:</label>
          <div>
            <input
              type="checkbox"
              id="amountNotReceived"
              checked={isAmountNotReceived}
              onChange={() => setIsAmountNotReceived(!isAmountNotReceived)}
            />
            <label htmlFor="amountNotReceived">Not Received</label>
          </div>
        </div>
        <div className="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TransportForm;
