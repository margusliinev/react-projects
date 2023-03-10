import React, { useState, useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const AddToCart = ({ product }) => {
    const { stock, colors } = product;
    const [mainColor, setMainColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
    const { addToCart } = useContext(CartContext);

    const increase = () => {
        setAmount((oldAmount) => {
            let newAmount = oldAmount + 1;
            if (newAmount > stock) {
                newAmount = stock;
            }
            return newAmount;
        });
    };

    const decrease = () => {
        setAmount((oldAmount) => {
            let newAmount = oldAmount - 1;
            if (newAmount < 1) {
                newAmount = 1;
            }
            return newAmount;
        });
    };

    return (
        <div className='add-to-cart'>
            <div className='colors'>
                <span>colors: </span>
                <div>
                    {colors.map((color, index) => {
                        return (
                            <button key={index} style={{ background: color }} className={color === mainColor ? 'color-btn active-btn' : 'color-btn'} onClick={() => setMainColor(color)}>
                                {color === mainColor ? <FaCheck /> : ''}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className='btn-container'>
                <div className='amount-buttons'>
                    <button type='button' className='amount-btn' onClick={decrease}>
                        <FaMinus />
                    </button>
                    <h3 className='amount'>{amount}</h3>
                    <button type='button' className='amount-btn' onClick={increase}>
                        <FaPlus />
                    </button>
                </div>
                <Link to={'/cart'} className='btn' onClick={() => addToCart(mainColor, amount)}>
                    ADD TO CART
                </Link>
            </div>
        </div>
    );
};

export default AddToCart;
