import React, { useContext } from 'react';
import { GithubContext } from '../context/context';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

const Info = () => {
    const { githubUser } = useContext(GithubContext);
    const { public_repos, followers, following, public_gists } = githubUser;

    const items = [
        { id: 1, icon: <GoRepo className='icon' />, label: 'repos', value: public_repos, color: 'pink' },
        { id: 2, icon: <FiUsers className='icon' />, label: 'followers', value: followers, color: 'green' },
        { id: 3, icon: <FiUserPlus className='icon' />, label: 'following', value: following, color: 'purple' },
        { id: 4, icon: <GoGist className='icon' />, label: 'gists', value: public_gists, color: 'yellow' },
    ];

    return (
        <section className='dashboard-info'>
            <div className='info-container'>
                {items.map(({ id, icon, label, value, color }) => {
                    return (
                        <article key={id}>
                            <span className={color}>{icon}</span>
                            <div>
                                <h5>{value}</h5>
                                <p>{label}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Info;
