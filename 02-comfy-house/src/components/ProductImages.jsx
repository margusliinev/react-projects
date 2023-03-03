const ProductImages = ({ images }) => {
    return (
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
    );
};
export default ProductImages;
