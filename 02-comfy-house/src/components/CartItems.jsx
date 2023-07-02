import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../components';
import { CartContext } from '../context/CartContext';
import { formatPrice } from '../utils/formatPrice';

const CartItems = () => {
    const { cart, clearCart, cart_subtotal_price, cart_shipping_price, cart_total_price } = useContext(CartContext);
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
                <Link to={'/products'} className='btn continue-shopping-btn'>
                    Continue Shopping
                </Link>
                <button type='button' className='btn clear-shopping-btn' onClick={clearCart}>
                    Clear Shopping Cart
                </button>
            </div>
            <div className='cart-total'>
                <div className='cart-total-container'>
                    <p>
                        <p>Subtotal:</p>
                        <span>{formatPrice(cart_subtotal_price)}</span>
                    </p>
                    <p>
                        <p>Shipping Fee:</p>
                        <span>{formatPrice(cart_shipping_price)}</span>
                    </p>
                    <hr />
                    <p>
                        <p>Order Total:</p>
                        <span>{formatPrice(cart_total_price)}</span>
                    </p>
                </div>
                <button type='button' className='btn login-btn'>
                    PROCEED TO CHECKOUT
                </button>
            </div>
        </div>
    );
};

export default CartItems;
