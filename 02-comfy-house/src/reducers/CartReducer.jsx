import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_CART_ITEM_COUNT, CLEAR_CART, COUNT_CART_TOTALS } from '../utils/actions';

const reducer = (state, action) => {
    if (action.type === ADD_TO_CART) {
        return { ...state };
    }
    throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
