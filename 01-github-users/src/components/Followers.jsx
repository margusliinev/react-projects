import React, { useContext } from 'react';
import { GithubContext } from '../context/context';

const Followers = () => {
    const { followers } = useContext(GithubContext);

    return (
        <article className='followers'>
            <div className='followers-container'>
                {followers.map((follower, index) => {
                    const { avatar_url: img, html_url: url, login: login } = follower;
                    return (
                        <div key={index}>
                            <img src={img} alt={login} />
                            <div>
                                <h6>{login}</h6>
                                <a href={url}>{url}</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </article>
    );
};

export default Followers;
