import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartItem } from '../components';

const CartItems = () => {
    const { cart } = useContext(CartContext);
    return (
        <div className='cart-items'>
            {cart.map((cartItem) => {
                return <CartItem key={cartItem.id} {...cartItem} />;
            })}
        </div>
    );
};

export default CartItems;
