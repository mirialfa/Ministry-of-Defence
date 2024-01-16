import React from 'react';
import { useSelector } from 'react-redux';
import "./ShoppingCart.css"

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);

  const groupedByCategory = cart.reduce((acc, item) => {
    const categoryIndex = acc.findIndex((group) => group.categoryId === item.categoryId);

    if (categoryIndex !== -1) {
      const productIndex = acc[categoryIndex].items.findIndex((p) => p.id === item.id);

      if (productIndex !== -1) {
        acc[categoryIndex].items[productIndex].total += item.quantity || 1;
      } else {
        acc[categoryIndex].items.push({
          id: item.id,
          name: item.name,
          total: item.quantity || 1,
        });
      }

      acc[categoryIndex].total += item.quantity || 1;
    } else {
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

// ShoppingCart.jsx

return (
  <div className="shopping-cart-container">
    <h2>Shopping Cart</h2>
    {groupedByCategory.map((categoryGroup) => (
      <div key={categoryGroup.categoryId} className="category">
        <h3 className="category-title">Category ID: {categoryGroup.categoryId}</h3>
        <ul className="product-list">
          {categoryGroup.items.map((product) => (
            <li key={product.id} className="product-item">
              {product.name} - כמות: {product.total}
            </li>
          ))}
        </ul>
        <p className="total-quantity">
          Total Quantity for Category ID {categoryGroup.categoryId}: {categoryGroup.total}
        </p>
      </div>
    ))}
  </div>
);

};

export default ShoppingCart;
