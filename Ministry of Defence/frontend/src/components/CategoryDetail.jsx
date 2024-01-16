import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, List, ListItem, Button } from '@mui/material';
import { addItem } from '../store/cartSlice';
import "./CategoryDetail.css"

const CategoryDetail = ({categoryId}) => {
  const dispatch = useDispatch();
//   const { categoryId } = useParams();
  const category = useSelector(state => state.categories.find(c => c.id === Number(categoryId)));

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

 // CategoryDetail.jsx

return (
  <div className="category-detail-container">
    <Typography variant="h4" className="category-title">
      {category?.name} Items
    </Typography>
    <List className="item-list">
      {category && category?.Items?.map((item) => (
        <ListItem key={item.id} className="item">
          {item.name}
          <Button
            className="add-to-cart-button"
            onClick={() => handleAddToCart(item)}
          >
            הוסף
          </Button>
        </ListItem>
      ))}
    </List>
  </div>
);

};

export default CategoryDetail;
