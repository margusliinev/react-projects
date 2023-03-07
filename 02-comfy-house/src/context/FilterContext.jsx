import { LOAD_PRODUCTS, SET_GRID_VIEW, SET_LIST_VIEW, UPDATE_SORT, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS, CLEAR_FILTERS } from '../utils/actions';
import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { reducer } from '../reducers/FilterReducer';

const FilterContext = createContext();

const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: true,
};

const FilterProvider = ({ children }) => {
    const { products } = useContext(ProductsContext);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products });
    }, [products]);

    const setGridView = () => {
        dispatch({ type: SET_GRID_VIEW });
    };

    const setListView = () => {
        dispatch({ type: SET_LIST_VIEW });
    };

    return <FilterContext.Provider value={{ ...state, setGridView, setListView }}>{children}</FilterContext.Provider>;
};

export { FilterContext, FilterProvider };
