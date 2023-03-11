import React from 'react';
import { PageHero, CartItems } from '../components';

const CartPage = () => {
    return (
        <section className='cart-page'>
            <PageHero title='cart' />
            <div className='cart-container'>
                <CartItems />
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
        </section>
    );
};

export default CartPage;
