import React from 'react';
import { PageHero, Filters, Sort, ProductsList } from '../components';

const ProductsPage = () => {
    return (
        <section className='products-page'>
            <PageHero title='products' />
            <div className='products-page-container'>
                <Filters />
                <div>
                    <Sort />
                    <ProductsList />
                </div>
            </div>
        </section>
    );
};

export default ProductsPage;
