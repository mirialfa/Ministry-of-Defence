import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, List, ListItem, Badge, Button } from '@mui/material';
import { fetchCategories } from '../store/categoriesSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CategoryDetail from './CategoryDetail';
import ShoppingCart from './ShoppingCart'; 
import "./CategoriesList.css"

const CategoriesList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(state => state.categories);
  const cart = useSelector(state => state.cart);
  const [selectedCategoryId,setSelectedCategoryId]= useState()
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId)
  };

  // CategoriesList.jsx

return (
  <div className="categories-container">
    <Typography variant="h4" className="category-title">
      רשימת קניות
    </Typography>
    <List className="category-list">
      {categories.map((category) => (
        <ListItem
          key={category.id}
          className="category-item"
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </ListItem>
      ))}
    </List>
    {selectedCategoryId && <CategoryDetail categoryId={selectedCategoryId} />}
    <ShoppingCart />
    <Button
      className="order-summary-button"
      onClick={() => navigate(`/OrderSummary`)}
    >
      סיים הזמנה
    </Button>
  </div>
);

};

export default CategoriesList;

