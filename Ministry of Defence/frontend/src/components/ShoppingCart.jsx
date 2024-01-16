// ShoppingCart.js
import React from 'react';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);

  // Group items by categoryId and productId
  const groupedByCategory = cart.reduce((acc, item) => {
    const categoryIndex = acc.findIndex((group) => group.categoryId === item.categoryId);

    if (categoryIndex !== -1) {
      // Category already exists, update the existing category
      const productIndex = acc[categoryIndex].items.findIndex((p) => p.id === item.id);

      if (productIndex !== -1) {
        // Product already exists, update the existing product
        acc[categoryIndex].items[productIndex].total += item.quantity || 1;
      } else {
        // Product doesn't exist, create a new product
        acc[categoryIndex].items.push({
          id: item.id,
          name: item.name,
          total: item.quantity || 1,
        });
      }

      acc[categoryIndex].total += item.quantity || 1;
    } else {
      // Category doesn't exist, create a new category
      acc.push({
        categoryId: item.categoryId,
        items: [
          {
            id: item.id,
            name: item.name,
            total: item.quantity || 1,
          },
        ],
        total: item.quantity || 1,
      });
    }

    return acc;
  }, []);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {groupedByCategory.map((categoryGroup) => (
        <div key={categoryGroup.categoryId}>
          <h3>Category ID: {categoryGroup.categoryId}</h3>
          <ul>
            {categoryGroup.items.map((product) => (
              <li key={product.id}>
                {product.name} - Quantity: {product.total}
              </li>
            ))}
          </ul>
          <p>Total Quantity for Category ID {categoryGroup.categoryId}: {categoryGroup.total}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
