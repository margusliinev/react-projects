import { LOAD_PRODUCTS, SET_GRID_VIEW, SET_LIST_VIEW, UPDATE_SORT, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS, CLEAR_FILTERS } from '../utils/actions';

const reducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
        let maxPrice = action.payload;
        maxPrice = maxPrice.map((product) => product.price);
        maxPrice = Math.max(...maxPrice);
        return { ...state, all_products: [...action.payload], filtered_products: [...action.payload], filters: { ...state.filters, max_price: maxPrice, price: maxPrice } };
    }
    if (action.type === SET_GRID_VIEW) {
        return { ...state, grid_view: true };
    }
    if (action.type === SET_LIST_VIEW) {
        return { ...state, grid_view: false };
    }
    if (action.type === UPDATE_SORT) {
        return { ...state, sort: action.payload };
    }
    if (action.type === SORT_PRODUCTS) {
        let tempProducts = [...state.filtered_products];
        if (state.sort === 'price-lowest') {
            tempProducts = tempProducts.sort((a, b) => a.price - b.price);
        }
        if (state.sort === 'price-highest') {
            tempProducts = tempProducts.sort((a, b) => b.price - a.price);
        }
        if (state.sort === 'name-az') {
            tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (state.sort === 'name-za') {
            tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
        }
        return { ...state, filtered_products: tempProducts };
    }
    if (action.type === UPDATE_FILTERS) {
        const { name, value } = action.payload;
        return { ...state, filters: { ...state.filters, [name]: value } };
    }
    throw new Error(`No Matching "${action.type}" - action type`);
};
export { reducer };
