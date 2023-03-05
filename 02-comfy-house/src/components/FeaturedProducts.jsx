import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { Loader } from '../components';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';

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
        return;
    }

    return (
        <>
            <div className='featured-products'>
                <h4>Featured Products</h4>
                <div className='title-underline'></div>
                <div className='featured-products-container'>
                    {featured.slice(0, 3).map(({ id, image, name, price }) => {
                        return (
                            <article key={id} className='featured-product'>
                                <div className='featured-product-img-container'>
                                    <img src={image} alt='featured product image' className='featured-product-img' />
                                    <Link to={`/products/${id}`} className='product-link'>
                                        <FaSearch className='product-icon' />
                                    </Link>
                                </div>
                                <div className='featured-product-info'>
                                    <h6>{name}</h6>
                                    <p>{formatPrice(price)}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
                <Link to={'/products'} className='btn'>
                    all products
                </Link>
            </div>
        </>
    );
};

export default FeaturedProducts;
