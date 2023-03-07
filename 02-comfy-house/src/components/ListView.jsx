import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';

const ListView = ({ products }) => {
    return (
        <div className='list-products-container'>
            {products.map((product) => {
                const { id, image, name, price, description } = product;
                return (
                    <article key={id}>
                        <img src={image} alt={name} />
                        <div>
                            <h6>{name}</h6>
                            <h6 className='price'>{formatPrice(price)}</h6>
                            <p>{description.substring(0, 150)}...</p>
                            <Link to={`/products/${id}`} className='btn'>
                                Details
                            </Link>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default ListView;
