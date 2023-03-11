import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_CART_ITEM_COUNT, CLEAR_CART, COUNT_CART_TOTALS } from '../utils/actions';
import React, { createContext, useReducer } from 'react';
import reducer from '../reducers/CartReducer';

const CartContext = createContext();

const initialState = {
    cart: [],
    cart_item_count: 0,
    cart_total_price: 0,
    shipping_fee: 499,
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
    };
    return <CartContext.Provider value={{ ...state, addToCart }}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
