import React, { useContext } from 'react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { formatPrice } from '../utils/formatPrice';
import { CartContext } from '../context/CartContext';

const CartItem = ({ id, name, color, amount, image, price, stock }) => {
    const { changeCartItemCount } = useContext(CartContext);

    const decrease = () => {
        changeCartItemCount(id, 'dec');
    };

    const increase = () => {
        changeCartItemCount(id, 'inc');
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
                <h6 className='amount'>{amount}</h6>
                <button type='button' className='amount-btn' onClick={increase}>
                    <FaPlus />
                </button>
            </div>
            <h6 className='cart-subtotal'>{formatPrice(price * amount)}</h6>
            <button type='button' className='trash-btn'>
                <FaTrash />
            </button>
        </article>
    );
};

export default CartItem;
