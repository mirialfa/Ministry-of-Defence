// // CategoryDetail.jsx
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Typography, List, ListItem } from '@mui/material';
// import { fetchCategories } from '../store/categoriesSlice';
// import { useParams } from 'react-router-dom';

// const CategoryDetail = () => {
//   const dispatch = useDispatch();
//   const { categoryId } = useParams();
//   const category = useSelector((state) => state.categories.find((c) => c.id === Number(categoryId)));

// //   const items = useSelector((state) => state.categories.find((c) => c.id === Number(categoryId)));

// //   const categories = useSelector((state) => state.categories);

//   useEffect(() => {

//     // Call the fetchCategories thunk when the component mounts
//     dispatch(fetchCategories());
//   }, [dispatch]);
//   useEffect(() => {
// if(!category)
//     console.log("not");
// else
// console.log(category.Items)
//   }, [category]);
//   return (
//     <div>
//       <Typography variant="h4">{category?.name} Items</Typography>
//       <List>
//         {category && category?.Items?.map((item) => (
        
//           <ListItem key={item.id}>{item.name}</ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// export default CategoryDetail;


// CategoryDetail.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, List, ListItem, Button } from '@mui/material';
import { fetchCategories } from '../store/categoriesSlice';
// import { useParams } from 'react-router-dom';
import { addItem } from '../store/cartSlice';

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

  return (
    <div>
      <Typography variant="h4">{category?.name} Items</Typography>
      <List>
        {category && category?.Items?.map((item) => (
          <ListItem key={item.id}>
            {item.name}{' '}
            <Button variant="contained" onClick={() => handleAddToCart(item)}>
              Add to Cart
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CategoryDetail;
