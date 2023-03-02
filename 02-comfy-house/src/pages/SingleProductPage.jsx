import React, { useEffect, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';
import { PageHero, Loader, Error } from '../components';
import { formatPrice } from '../utils/formatPrice';

const single_product_url = `https://course-api.com/react-store-single-product?id=`;

const SingleProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { single_product_loading: loading, single_product_error: error, single_product: product, fetchSingleProduct } = useContext(ProductsContext);
    const { name, price, description, stock, stars, reviews, id: sku, company, images } = product;
    console.log(product);
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

    return (
        <section className='single-product-page'>
            <PageHero product={product.name} />
            <div className='single-product-container'>
                <Link to={'/products'} className='btn products-link'>
                    back to products
                </Link>
                <div className='single-product'>
                    <div className='single-product-img-container'>
                        <img src={images ? images[0].url : ''} alt={name} className='product-main-img' />
                        <div className='images-container'>
                            {images
                                ? images.map((image) => {
                                      return <img key={image.id} src={image.url} alt='product image' className='product-alt-img' />;
                                  })
                                : []}
                        </div>
                    </div>
                    <div className='single-product-info-container'>
                        <h2>{name}</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProductPage;
