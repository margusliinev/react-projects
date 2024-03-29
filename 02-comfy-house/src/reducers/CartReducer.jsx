import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_CART_ITEM_COUNT, CLEAR_CART, COUNT_CART_TOTALS, CART_TOTAL_ITEM_COUNT } from '../utils/actions';

const reducer = (state, action) => {
    if (action.type === ADD_TO_CART) {
        const { id, color, amount, product } = action.payload;
        const tempItem = state.cart.find((cartItem) => cartItem.id === id + color);
        if (tempItem) {
            const tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === id + color) {
                    let newAmount = cartItem.amount + amount;
                    if (newAmount > cartItem.stock) {
                        newAmount = cartItem.stock;
                    }
                    return { ...cartItem, amount: newAmount };
                } else {
                    return cartItem;
                }
            });
            return { ...state, cart: tempCart };
        } else {
            const newItem = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.images[0].url,
                price: product.price,
                stock: product.stock,
            };
            return { ...state, cart: [...state.cart, newItem] };
        }
    }
    if (action.type === CHANGE_CART_ITEM_COUNT) {
        const { id, value } = action.payload;
        if (value === 'inc') {
            const tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === id) {
                    let newAmount = cartItem.amount + 1;
                    if (newAmount > cartItem.stock) {
                        newAmount = cartItem.stock;
                    }
                    return { ...cartItem, amount: newAmount };
                } else {
                    return cartItem;
                }
            });
            return { ...state, cart: tempCart };
        }
        if (value === 'dec') {
            const tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === id) {
                    let newAmount = cartItem.amount - 1;
                    if (newAmount < 1) {
                        newAmount = 1;
                    }
                    return { ...cartItem, amount: newAmount };
                } else {
                    return cartItem;
                }
            });
            return { ...state, cart: tempCart };
        }
    }
    if (action.type === CART_TOTAL_ITEM_COUNT) {
        const count = state.cart.reduce((acc, cur) => {
            acc = acc + cur.amount;
            return acc;
        }, 0);
        return { ...state, cart_total_item_count: count };
    }
    if (action.type === REMOVE_FROM_CART) {
        const tempCart = state.cart.filter((cartItem) => cartItem.id !== action.payload);
        return { ...state, cart: tempCart };
    }
    if (action.type === CLEAR_CART) {
        return { ...state, cart: [] };
    }
    if (action.type === COUNT_CART_TOTALS) {
        const tempSubtotal = state.cart.reduce((acc, cur) => {
            acc = acc + cur.price * cur.amount;
            return acc;
        }, 0);
        const tempShippingPrice = tempSubtotal * 0.05;
        const tempTotalPrice = tempSubtotal + tempShippingPrice;
        return { ...state, cart_subtotal_price: tempSubtotal, cart_shipping_price: tempShippingPrice, cart_total_price: tempTotalPrice };
    }
    throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
