import React, { useContext } from 'react';
import { GithubContext } from '../context/context';

const Followers = () => {
    const { followers } = useContext(GithubContext);
    console.log(followers);

    return (
        <article className='followers'>
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
        </article>
    );
};

export default Followers;
