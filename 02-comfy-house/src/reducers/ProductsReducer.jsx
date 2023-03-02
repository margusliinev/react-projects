import { GET_PRODUCTS_BEGIN, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_SINGLE_PRODUCT_BEGIN, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_ERROR } from '../utils/actions';

const reducer = (state, action) => {
    if (action.type === GET_PRODUCTS_BEGIN) {
        return { ...state, products_loading: true };
    }
    if (action.type === GET_PRODUCTS_SUCCESS) {
        const products = action.payload;
        const featured_products = action.payload.filter((product) => product.featured === true);
        return { ...state, products_loading: false, products: products, featured_products: featured_products };
    }
    if (action.type === GET_PRODUCTS_ERROR) {
        return { ...state, products_loading: false, products_error: true };
    }
    if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
        return { ...state, single_product_loading: true };
    }
    if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
        const product = action.payload;
        return { ...state, single_product_loading: false, single_product: product };
    }
    if (action.type === GET_SINGLE_PRODUCT_ERROR) {
        return { ...state, single_product_loading: false, single_product_error: true };
    }
    throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
