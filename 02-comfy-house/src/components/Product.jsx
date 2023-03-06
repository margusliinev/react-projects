import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { formatPrice } from '../utils/formatPrice';

const Product = (props) => {
    return (
        <article key={props.id} className='product'>
            <div className='product-img-container'>
                <img src={props.image} alt='product image' className='product-img' />
                <Link to={`/products/${props.id}`} className='product-link'>
                    <FaSearch className='product-icon' />
                </Link>
            </div>
            <div className='product-info'>
                <h6>{props.name}</h6>
                <p>{formatPrice(props.price)}</p>
            </div>
        </article>
    );
};

export default Product;
