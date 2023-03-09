import { LOAD_PRODUCTS, SET_GRID_VIEW, SET_LIST_VIEW, UPDATE_SORT, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS, CLEAR_FILTERS } from '../utils/actions';
import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { reducer } from '../reducers/FilterReducer';

const FilterContext = createContext();

const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sort: 'price-lowest',
    filters: {
        search: '',
        category: 'all',
        company: 'all',
        colors: 'all',
        min_price: 0,
        max_price: 0,
        price: 0,
        shipping: false,
    },
};

const FilterProvider = ({ children }) => {
    const { products } = useContext(ProductsContext);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products });
    }, [products]);

    useEffect(() => {
        dispatch({ type: SORT_PRODUCTS });
    }, [products, state.sort]);

    const setGridView = () => {
        dispatch({ type: SET_GRID_VIEW });
    };

    const setListView = () => {
        dispatch({ type: SET_LIST_VIEW });
    };

    const updateSort = (e) => {
        dispatch({ type: UPDATE_SORT, payload: e.target.value });
    };

    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'category') {
            value = e.target.textContent;
        }
        if (name === 'colors') {
            value = e.target.dataset.color;
        }
        if (name === 'price') {
            value = Number(e.target.value);
        }
        if (name === 'shipping') {
            if (e.target.checked === true) {
                value = true;
            } else {
                value = false;
            }
        }
        dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
    };

    return <FilterContext.Provider value={{ ...state, setGridView, setListView, updateSort, updateFilters }}>{children}</FilterContext.Provider>;
};

export { FilterContext, FilterProvider };
