import React, { useContext } from 'react';
import { GithubContext } from '../context/context';

const Followers = () => {
    const { followers, githubUser } = useContext(GithubContext);
    return (
        <article className='followers'>
            <div className='followers-container'>
                {followers.length > 0 ? (
                    followers.map((follower, index) => {
                        const { avatar_url: img, html_url: url, login: login } = follower;
                        return (
                            <div key={index}>
                                <img src={img} alt={login} />
                                <div>
                                    <h6>{login}</h6>
                                    <a href={url} target='_blank'>
                                        {url}
                                    </a>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <h6 className='no-followers'>{githubUser.name} does not have any followers.</h6>
                )}
            </div>
        </article>
    );
};

export default Followers;
