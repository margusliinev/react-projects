import loginImg from '../images/login-img.svg';

const Login = () => {
    return (
        <div className='login-page'>
            <div className='container'>
                <img src={loginImg} alt='github user' />
                <h1>Github User</h1>
                <button className='btn'>login</button>
            </div>
        </div>
    );
};

export default Login;
