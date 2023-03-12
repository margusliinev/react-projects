import React, { useState } from 'react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { formatPrice } from '../utils/formatPrice';

const CartItem = ({ id, name, color, amount, image, price, stock }) => {
    const [itemCount, setItemCount] = useState(amount);

    const increase = () => {
        setItemCount((oldAmount) => {
            let newAmount = oldAmount + 1;
            if (newAmount > stock) {
                newAmount = stock;
            }
            return newAmount;
        });
    };

    const decrease = () => {
        setItemCount((oldAmount) => {
            let newAmount = oldAmount - 1;
            if (newAmount < 1) {
                newAmount = 1;
            }
            return newAmount;
        });
    };

    return (
        <article className='cart-item'>
            <div className='cart-title'>
                <img src={image} alt={name} />
                <div>
                    <p>{name}</p>
                    <p>
                        Color: <span className='color-btn' style={{ background: color }}></span>
                    </p>
                    <p>{formatPrice(price)}</p>
                </div>
            </div>
            <h6 className='cart-price'>{formatPrice(price)}</h6>
            <div className='amount-buttons'>
                <button type='button' className='amount-btn' onClick={decrease}>
                    <FaMinus />
                </button>
                <h6 className='amount'>{itemCount}</h6>
                <button type='button' className='amount-btn' onClick={increase}>
                    <FaPlus />
                </button>
            </div>
            <h6 className='cart-subtotal'>{formatPrice(price * itemCount)}</h6>
            <button type='button' className='trash-btn'>
                <FaTrash />
            </button>
        </article>
    );
};

export default CartItem;
