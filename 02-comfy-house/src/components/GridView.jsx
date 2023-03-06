import React from 'react';
import Product from './Product';

const GridView = ({ products }) => {
    return (
        <div className='grid-products-container'>
            {products.map((product) => {
                return <Product key={product.id} {...product} />;
            })}
        </div>
    );
};

export default GridView;
