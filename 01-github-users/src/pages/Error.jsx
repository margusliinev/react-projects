import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error-page'>
            <h1>404</h1>
            <h3>Sorry, this page doesn't exist.</h3>
            <Link to={'/'} className='btn'>
                back home
            </Link>
        </div>
    );
};

export default Error;
