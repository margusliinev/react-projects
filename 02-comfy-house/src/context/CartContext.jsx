import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_CART_ITEM_AMOUNT, CLEAR_CART, COUNT_CART_TOTALS } from '../utils/actions';
import React, { createContext, useReducer, useContext } from 'react';
import reducer from '../reducers/CartReducer';
import { ProductsContext } from '../context/ProductsContext';

const CartContext = createContext();

const initialState = {
    cartItem: {},
    color: '',
    amount: 1,
};

const CartProvider = ({ children }) => {
    const { single_product } = useContext(ProductsContext);

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (color, amount) => {
        amount = Number(amount);
        dispatch({ type: ADD_TO_CART, payload: { single_product, color, amount } });
    };
    return <CartContext.Provider value={{ ...state, addToCart }}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
