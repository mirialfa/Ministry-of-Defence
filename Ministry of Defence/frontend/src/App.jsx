import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, Container, Grid } from '@mui/material';
import CategoriesList from './components/CategoriesList';
import CategoryDetail from './components/CategoryDetail';
import ShoppingCart from './components/ShoppingCart'; // Import the new component
import store from './store/store';
import OrderSummaryPage from './components/OrderSummaryPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<CategoriesList />} exact />
          <Route path="/OrderSummary" element={<OrderSummaryPage  />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;


