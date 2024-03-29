import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
    REMOVE_SINGLE_PRODUCT_ERROR,
} from '../utils/actions';
import React, { useEffect, createContext, useReducer } from 'react';
import reducer from '../reducers/ProductsReducer';
import axios from 'axios';

const ProductsContext = createContext();

const products_url = 'https://course-api.com/react-store-products';

const initialState = {
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: {},
};

const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchProducts = async (url) => {
        dispatch({ type: GET_PRODUCTS_BEGIN });
        try {
            const response = await axios.get(url);
            const products = response.data;
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
        } catch (error) {
            dispatch({ type: GET_PRODUCTS_ERROR });
        }
    };

    const fetchSingleProduct = async (url) => {
        dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
        try {
            const response = await axios.get(url);
            const product = response.data;
            dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: product });
        } catch (error) {
            dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
        }
    };

    const removeSingleProductError = () => {
        dispatch({ type: REMOVE_SINGLE_PRODUCT_ERROR });
    };

    useEffect(() => {
        fetchProducts(products_url);
    }, []);

    return <ProductsContext.Provider value={{ ...state, fetchSingleProduct, removeSingleProductError }}>{children}</ProductsContext.Provider>;
};

export { ProductsContext, ProductsProvider };
