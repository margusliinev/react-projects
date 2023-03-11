import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const CartItem = ({ id, name, color, amount, image, price, stock }) => {
    return (
        <article className='cart-item'>
            <img src={image} alt={name} />
            <div>
                <p>{name}</p>
                <p>
                    Color: <span className='color-btn' style={{ background: color }}></span>
                </p>
                <p>{price}</p>
            </div>
            <div className='amount-buttons'>
                <button type='button' className='amount-btn'>
                    <FaMinus />
                </button>
                <h3 className='amount'>{amount}</h3>
                <button type='button' className='amount-btn'>
                    <FaPlus />
                </button>
            </div>
        </article>
    );
};

export default CartItem;
