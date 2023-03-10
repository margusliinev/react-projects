import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_CART_ITEM_AMOUNT, CLEAR_CART, COUNT_CART_TOTALS } from '../utils/actions';

const reducer = (state, action) => {
    if (action.type === ADD_TO_CART) {
        const { single_product, color, amount } = action.payload;
        return { ...state, cartItem: single_product, color: color, amount: amount };
    }
};

export default reducer;
