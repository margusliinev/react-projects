import React, { useContext } from 'react';
import { PageHero, CartItems } from '../components';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart } = useContext(CartContext);

    if (cart.length < 1) {
        return (
            <section className='empty-cart-page'>
                <div>
                    <h3>Your cart is empty</h3>
                    <Link to={'/products'} className='btn'>
                        FILL IT
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className='cart-page'>
            <PageHero title='cart' />
            <CartItems />
        </section>
    );
};

export default CartPage;
