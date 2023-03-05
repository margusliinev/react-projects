import { Link } from 'react-router-dom';

const PageHero = ({ product, title }) => {
    return (
        <article className='page-hero'>
            <div className='page-hero-container'>
                <h4>
                    {title && (
                        <>
                            <Link to='/' className='link'>
                                Home{' '}
                            </Link>
                            {` / ${title}`}
                        </>
                    )}
                    {product && (
                        <>
                            <Link to='/' className='link'>
                                Home{' '}
                            </Link>
                            <Link to='/products' className='link'>
                                / Products
                            </Link>
                        </>
                    )}
                    {product && ' / ' + product}
                </h4>
            </div>
        </article>
    );
};

export default PageHero;
