import React from 'react';
import { useSelector } from 'react-redux';

const CartIcon = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-icon" style={{ position: 'relative' }}>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"></svg> */}
      {totalQuantity > 0 && (
        <span className="cart-count-badge">{totalQuantity}</span>
      )}
    </div>
  );
};

export default CartIcon;