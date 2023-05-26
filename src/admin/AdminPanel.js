import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CreateProduct from './CreateProduct';
import ProductList from './ProductList';
import UserCart from './UserCart';
import DeliveryStatus from './DeliveryStatus';
import OrderViewing from './OrderViewing';
import AmountCreditChecking from './AmountCreditChecking';
import DispatchOrders from './DispatchOrders';
import TransportDeliveryForm from './TransportDeliveryForm';
import TransportConfirmation from './TransportConfirmation';

const AdminDashboard = () => {
  return (
    <Router>
      <div className="admin-dashboard">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/create-product">Create Product</Link>
            </li>
            <li className="navbar-item">
              <Link to="/product-list">Product List</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user-cart">User Cart</Link>
            </li>
            <li className="navbar-item">
              <Link to="/delivery-status">Delivery Status</Link>
            </li>
            <li className="navbar-item">
              <Link to="/order-viewing">Order Viewing</Link>
            </li>
            <li className="navbar-item">
              <Link to="/amount-credit-checking">Amount Credit Checking</Link>
            </li>
            <li className="navbar-item">
              <Link to="/dispatch-orders">Dispatch Orders</Link>
            </li>
            <li className="navbar-item">
              <Link to="/transport-delivery-form">Transport Delivery Form</Link>
            </li>
            <li className="navbar-item">
              <Link to="/transport-confirmation">Transport Confirmation</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Route path="/create-product" component={CreateProduct} />
          <Route path="/product-list" component={ProductList} />
          <Route path="/user-cart" component={UserCart} />
          <Route path="/delivery-status" component={DeliveryStatus} />
          <Route path="/order-viewing" component={OrderViewing} />
          <Route path="/amount-credit-checking" component={AmountCreditChecking} />
          <Route path="/dispatch-orders" component={DispatchOrders} />
          <Route path="/transport-delivery-form" component={TransportDeliveryForm} />
          <Route path="/transport-confirmation" component={TransportConfirmation} />
        </div>
      </div>
    </Router>
  );
};

export default AdminDashboard;
