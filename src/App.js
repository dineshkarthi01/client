import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import ProductList from './components/UserList';

import UserCart from './components/UserCart';
import TransportForm from './transport/TransportForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/usercart" element={<UserCart />} />
        <Route path="/transport" element={<TransportForm />} />
      </Routes>
    </Router>
  );
};

export default App;
