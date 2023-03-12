import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_CART_ITEM_COUNT, CLEAR_CART, COUNT_CART_TOTALS, CART_TOTAL_ITEM_COUNT } from '../utils/actions';
import React, { createContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/CartReducer';

const CartContext = createContext();

const initialState = {
    cart: [],
    cart_total_item_count: 0,
    cart_subtotal_price: 0,
    cart_shipping_price: 499,
    cart_total_price: 0,
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
        dispatch({ type: CART_TOTAL_ITEM_COUNT });
    }, [state.cart]);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
    };

    const removeFromCart = (id) => {
        dispatch({ type: REMOVE_FROM_CART, payload: id });
    };

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    const changeCartItemCount = (id, value) => {
        dispatch({ type: CHANGE_CART_ITEM_COUNT, payload: { id, value } });
    };

    return <CartContext.Provider value={{ ...state, addToCart, removeFromCart, changeCartItemCount, clearCart }}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
