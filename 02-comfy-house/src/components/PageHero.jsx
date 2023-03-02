import { Link } from 'react-router-dom';

const PageHero = ({ product, title }) => {
    return (
        <article className='page-hero'>
            <div className='page-hero-container'>
                <h4>
                    <Link to='/' className='link'>
                        Home{' '}
                    </Link>
                    {title && ' / ' + title}
                    {product && (
                        <Link to='/products' className='link'>
                            / Products
                        </Link>
                    )}
                    {product && ' / ' + product}
                </h4>
            </div>
        </article>
    );
};

export default PageHero;
