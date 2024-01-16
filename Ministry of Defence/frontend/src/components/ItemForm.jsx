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
הוסף פריט      </Button>
    </form>
  );
};

export default ItemForm;
