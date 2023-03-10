import React from 'react';
import { PageHero } from '../components';

const CartPage = () => {
    return (
        <section className='cart-page'>
            <PageHero title='cart' />
            <div className='cart-container'>
                <div className='cart-items'></div>
                <hr />
                <div className='cart-buttons'>
                    <button type='button' className='btn'>
                        Continue Shopping
                    </button>
                    <button type='button' className='btn'>
                        Clear Shopping Cart
                    </button>
                </div>
                <div className='cart-total'>
                    <div className='cart-total-container'>
                        <p>Subtotal: €305.99</p>
                        <p>Shipping Fee: €5.35</p>
                        <hr />
                        <p>Order Total: €315.33</p>
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
