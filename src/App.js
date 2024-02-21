import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductListPage/ProductList';
import ProductDetail from './components/ProductDetailPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProductList/>} /> 
          <Route path="/product-detail"  element={<ProductDetail/>} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
