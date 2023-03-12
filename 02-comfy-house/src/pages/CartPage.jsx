import React, { useContext } from 'react';
import { PageHero, CartItems } from '../components';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
    const { cart } = useContext(CartContext);

    return (
        <section className='cart-page'>
            <PageHero title='cart' />
            <CartItems />
        </section>
    );
};

export default CartPage;
