import React, { useEffect, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';
import { PageHero, Loader, Error, ProductImages } from '../components';
import { formatPrice } from '../utils/formatPrice';

const single_product_url = `https://course-api.com/react-store-single-product?id=`;

const SingleProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { single_product_loading: loading, single_product_error: error, single_product: product, fetchSingleProduct } = useContext(ProductsContext);

    useEffect(() => {
        fetchSingleProduct(`${single_product_url}${id}`);
    }, []);

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    });

    if (loading) {
        return (
            <section className='single-product-page'>
                <PageHero />
                <Loader />
            </section>
        );
    }

    if (error) {
        return (
            <section className='single-product-page'>
                <PageHero />
                <Error />
            </section>
        );
    }

    const { name, price, description, stock, stars, reviews, id: sku, company, images } = product;

    return (
        <section className='single-product-page'>
            <PageHero product={product.name} />
            <div className='single-product-container'>
                <Link to={'/products'} className='btn products-link'>
                    back to products
                </Link>
                <div className='single-product'>
                    <ProductImages images={images} />
                    <div className='single-product-info-container'>
                        <h4 className='single-product-name'>{name}</h4>
                        {/* <Stars /> */}
                        <h6 className='single-product-price'>{formatPrice(price)}</h6>
                        <p className='single-product-desc'>{description}</p>
                        <p className='single-product-info'>
                            <span>Available: </span>
                            {stock > 0 ? 'In stock' : 'out of stock'}
                        </p>
                        <p className='single-product-info'>
                            <span>SKU: </span>
                            {sku}
                        </p>
                        <p className='single-product-info'>
                            <span>Brand: </span>
                            {company}
                        </p>
                        <hr />
                        {/* {stock > 0 && <AddToCart />} */}
                        <button type='button' className='btn addtocart-btn'>
                            AddToCart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProductPage;
