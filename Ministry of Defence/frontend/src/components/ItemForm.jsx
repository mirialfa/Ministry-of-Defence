// // src/features/items/ItemForm.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// // import { addNewItem } from '../store/';

// const ItemForm = () => {
//   const dispatch = useDispatch();
//   const [itemName, setItemName] = useState('');
//   const [category, setCategory] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addNewItem({ name: itemName, category }));
//     setItemName('');
//     setCategory('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         label="Item Name"
//         variant="outlined"
//         value={itemName}
//         onChange={(e) => setItemName(e.target.value)}
//       />
//       <FormControl variant="outlined">
//         <InputLabel id="category-label">Category</InputLabel>
//         <Select
//           label="Category"
//           labelId="category-label"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           {/* Map through categories from Redux store and create MenuItems */}
//           {/* Adjust this part based on your actual category data structure */}
//           <MenuItem value="category1">Category 1</MenuItem>
//           <MenuItem value="category2">Category 2</MenuItem>
//           {/* Add more categories as needed */}
//         </Select>
//       </FormControl>
//       <Button type="submit" variant="contained" color="primary">
//         Add Item
//       </Button>
//     </form>
//   );
// };

// export default ItemForm;
// ItemForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { addItem } from '../store/itemsSlice';

const ItemForm = ({ categoryId }) => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ name: itemName, categoryId }));
    setItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Item Name"
        variant="outlined"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Item
      </Button>
    </form>
  );
};

export default ItemForm;
