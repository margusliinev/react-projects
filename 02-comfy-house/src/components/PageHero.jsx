const PageHero = ({ title }) => {
    return (
        <article className='page-hero'>
            <div className='page-hero-container'>
                <h4>
                    Home / <span>{title}</span>
                </h4>
            </div>
        </article>
    );
};

export default PageHero;
