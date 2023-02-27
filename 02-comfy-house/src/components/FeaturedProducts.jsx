import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { Loader, Error } from '../components';

const FeaturedProducts = () => {
    const { featured_products: featured, products_loading: loading, products_error: error } = useContext(ProductsContext);

    if (loading) {
        return <Loader />;
    }
    if (error) {
        return <Error />;
    }
    return (
        <>
            {featured.map((product) => {
                return (
                    <article key={product.id} className='featured-product'>
                        <img src={product.image} alt='featured product image' className='featured-product-img' />
                        <div className='featured-product-info'>
                            <h6>{product.name}</h6>
                            <p>{product.price}</p>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default FeaturedProducts;
