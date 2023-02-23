const Footer = () => {
    return (
        <footer className='footer'>
            <h6>
                &copy; {new Date().getFullYear()}
                <span> ComfyHouse</span>
            </h6>
            <h6>All rights reserved</h6>
        </footer>
    );
};

export default Footer;
