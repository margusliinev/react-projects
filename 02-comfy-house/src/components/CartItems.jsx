import React, { useContext } from 'react';
import { CartItem } from '../components';
import { CartContext } from '../context/CartContext';

const CartItems = () => {
    const { cart } = useContext(CartContext);
    return (
        <div className='cart-container'>
            <div className='cart-items'>
                <div className='cart-titles'>
                    <h6>Item</h6>
                    <h6>Price</h6>
                    <h6>Quantity</h6>
                    <h6>Subtotal</h6>
                    <div></div>
                </div>
                <hr className='top-hr' />
                {cart.map((cartItem) => {
                    return <CartItem key={cartItem.id} {...cartItem} />;
                })}
            </div>
            <hr />
            <div className='cart-buttons'>
                <button type='button' className='btn continue-shopping-btn'>
                    Continue Shopping
                </button>
                <button type='button' className='btn clear-shopping-btn'>
                    Clear Shopping Cart
                </button>
            </div>
            <div className='cart-total'>
                <div className='cart-total-container'>
                    <p>
                        Subtotal: <span>€305.99</span>
                    </p>
                    <p>
                        Shipping Fee: <span>€5.35</span>
                    </p>
                    <hr />
                    <p>
                        Order Total: <span>€315.33</span>
                    </p>
                </div>
                <button type='button' className='btn login-btn'>
                    Login
                </button>
            </div>
        </div>
    );
};

export default CartItems;
