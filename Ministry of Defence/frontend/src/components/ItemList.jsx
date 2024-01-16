// // src/features/items/ItemList.js
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Typography, List, ListItem } from '@mui/material';

// const ItemList = () => {
//   const items = useSelector((state) => state.items);

//   return (
//     <div>
//       <Typography variant="h4">Item List</Typography>
//       <List>
//         {/* {items?.map((item) => (
//           <ListItem key={item.id}>{item.name}</ListItem>
//         ))} */}
//         itemsssss comming soon
//       </List>
//     </div>
//   );
// };

// export default ItemList;

// ItemList.jsx
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
