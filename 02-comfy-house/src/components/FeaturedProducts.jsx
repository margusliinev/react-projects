import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { Loader, Error } from '../components';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const { featured_products: featured, products_loading: loading, products_error: error } = useContext(ProductsContext);

    if (loading) {
        return (
            <>
                <div></div>
                <Loader />
                <div></div>
            </>
        );
    }
    if (error) {
        return (
            <>
                <div></div>
                <Error />
                <div></div>
            </>
        );
    }

    return (
        <>
            {featured.slice(0, 3).map((product) => {
                return (
                    <article key={product.id} className='featured-product'>
                        <div className='featured-product-img-container'>
                            <img src={product.image} alt='featured product image' className='featured-product-img' />
                            <Link to={`/products/${product.id}`} className='product-link'>
                                <FaSearch className='product-icon' />
                            </Link>
                        </div>
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
