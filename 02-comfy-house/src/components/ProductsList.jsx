import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import { ProductsContext } from '../context/ProductsContext';
import GridView from './GridView';
import ListView from './ListView';
import { Loader } from '../components';

const ProductsList = () => {
    const { filtered_products: products, grid_view } = useContext(FilterContext);
    const { products_loading: loading } = useContext(ProductsContext);

    if (loading) {
        return <Loader />;
    }

    if (products.length < 1) {
        return <h6 style={{ fontWeight: '600', fontSize: '22px', textAlign: 'center', padding: '5rem 0' }}>Sorry, no products matched your search...</h6>;
    }

    if (grid_view === false) {
        return <ListView products={products} />;
    }

    return <GridView products={products}></GridView>;
};

export default ProductsList;
