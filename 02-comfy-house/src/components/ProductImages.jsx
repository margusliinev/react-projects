import React, { useState } from 'react';

const ProductImages = ({ images }) => {
    const [mainImage, setMainImage] = useState(0);

    return (
        <div className='single-product-img-container'>
            <img src={images ? images[mainImage].url : ''} alt='main image' className='product-main-img' />
            <div className='images-container'>
                {images
                    ? images.map((image, index) => {
                          return <img key={index} src={image.url} alt='product image' className={mainImage === index ? 'product-alt-img active' : 'product-alt-img'} onClick={() => setMainImage(index)} />;
                      })
                    : []}
            </div>
        </div>
    );
};
export default ProductImages;
