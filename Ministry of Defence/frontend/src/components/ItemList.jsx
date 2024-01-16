import React from 'react';
import { List, ListItem } from '@mui/material';

const ItemList = ({ items }) => {
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>{item.name}</ListItem>
      ))}
    </List>
  );
};

export default ItemList;
