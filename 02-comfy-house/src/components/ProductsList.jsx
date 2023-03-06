import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductsList = () => {
    const { filtered_products: products } = useContext(FilterContext);

    return <GridView products={products}></GridView>;
};

export default ProductsList;
