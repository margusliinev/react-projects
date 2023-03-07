import { LOAD_PRODUCTS, SET_GRID_VIEW, SET_LIST_VIEW, UPDATE_SORT, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS, CLEAR_FILTERS } from '../utils/actions';

const reducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
        return { ...state, all_products: [...action.payload], filtered_products: [...action.payload] };
    }
    if (action.type === SET_GRID_VIEW) {
        return { ...state, grid_view: true };
    }
    if (action.type === SET_LIST_VIEW) {
        return { ...state, grid_view: false };
    }
    throw new Error(`No Matching "${action.type}" - action type`);
};
export { reducer };
