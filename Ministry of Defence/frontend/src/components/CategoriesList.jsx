// // CategoriesList.jsx
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Typography, List, ListItem } from '@mui/material';
// import { fetchCategories } from '../store/categoriesSlice';
// import { useNavigate } from 'react-router-dom';

// const CategoriesList = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // Add this line to get the navigate function
//   const categories = useSelector((state) => state.categories);

//   useEffect(() => {
//     // Call the fetchCategories thunk when the component mounts
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   const handleCategoryClick = (categoryId) => {
//     // Navigate to the category detail page when a category is clicked
//     navigate(`/categories/${categoryId}`);
//   };

//   return (
//     <div>
//       <Typography variant="h4">Categories</Typography>
//       <List>
//         {categories.map((category) => (
//           <ListItem key={category.id} onClick={() => handleCategoryClick(category.id)}>
//             {category.name}
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// export default CategoriesList;
// CategoriesList.jsx
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, List, ListItem, Badge, Button } from '@mui/material';
import { fetchCategories } from '../store/categoriesSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CategoryDetail from './CategoryDetail';
import ShoppingCart from './ShoppingCart';


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
    // navigate(`/categories/${categoryId}`);
    setSelectedCategoryId(categoryId)
  };

  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      <Typography variant="h4">
        Categories{' '}
        {/* <Badge badgeContent={cart.length} color="primary">
          Cart
          <Link to="/cart">Cart</Link>
        </Badge> */}
      </Typography>
      <List>
        {categories.map((category) => (
          <ListItem key={category.id} onClick={() => handleCategoryClick(category.id)}>
            {category.name}
          </ListItem>
        ))}
      </List>
      {
        selectedCategoryId&&
        <CategoryDetail categoryId={selectedCategoryId}/>
      }
      <ShoppingCart/>
      <Button onClick={()=>navigate(`/OrderSummary`)}>
                 סיים הזמנה
        </Button>
    </div>
  );
};

export default CategoriesList;

