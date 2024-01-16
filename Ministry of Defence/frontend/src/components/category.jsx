// MainComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesList from './CategoriesList';
import { fetchCategories } from '../store/categoriesSlice';

const MainComponent = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    // Fetch categories when the component mounts
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleItemClick = (item) => {
    // Handle the item click, you can navigate to a detailed view or do something else
    console.log('Item clicked:', item);
  };

  return (
    <div>
      <h1>Categories and Items</h1>
      <CategoriesList categories={categories} onItemClick={handleItemClick} />
    </div>
  );
};

export default MainComponent;
