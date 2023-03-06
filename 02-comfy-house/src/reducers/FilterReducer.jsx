import { LOAD_PRODUCTS, SET_GRID_VIEW, SET_LIST_VIEW, UPDATE_SORT, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS, CLEAR_FILTERS } from '../utils/actions';

const reducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
        return { ...state, all_products: [...action.payload], filtered_products: [...action.payload] };
    }
    throw new Error(`No Matching "${action.type}" - action type`);
};
export { reducer };
