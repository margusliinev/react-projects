import React, { useContext } from 'react';
import { GithubContext } from '../context/context';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';

const Profile = () => {
    const { githubUser } = useContext(GithubContext);
    const { avatar_url, html_url, name, company, blog, bio, location, twitter_username, login } = githubUser;

    return (
        <article className='profile'>
            <header>
                <img className='profile-img' src={avatar_url} alt={name} />
                <div>
                    <h6>{name || login}</h6>
                    {twitter_username && <p>@{twitter_username}</p>}
                </div>
                <a href={html_url} target='_blank'>
                    follow
                </a>
            </header>
            <p className='bio'>{bio || `${name} has not set up their biography.`}</p>
            <div className='links'>
                <p>
                    <MdBusiness className='profile-link-icon'></MdBusiness>
                    {company || 'Company not listed on profile'}
                </p>
                <p>
                    <MdLocationOn className='profile-link-icon'></MdLocationOn>
                    {location || 'Earth'}
                </p>
                <a href={blog ? `https://${blog}` : `${html_url}`} target='_blank'>
                    <MdLink className='profile-link-icon'></MdLink>
                    {blog || `${html_url}`}
                </a>
            </div>
        </article>
    );
};

export default Profile;
