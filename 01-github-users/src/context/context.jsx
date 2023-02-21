import React, { useState, useEffect } from 'react';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
    const [followers, setFollowers] = useState({});
    const [githubUser, setGithubUser] = useState({});
    const [user, setUser] = useState('');
    const [requests, setRequests] = useState(0);
    const [error, setError] = useState({ show: false, msg: '' });
    const [loading, setLoading] = useState(false);

    const searchGithubUser = async (user) => {
        toggleError();
        setLoading(true);
        const response = await axios(`${rootUrl}/users/${user}`).catch((err) => {
            if (err.response.status === 403) {
                toggleError(true, 'Sorry, you have exceeded your hourly rate limit!');
            }
            if (err.response.status === 404) {
                toggleError(true, 'Username does not exist, please try again!');
            }
        });
        if (response) {
            setGithubUser(response.data);
        }
        setLoading(false);
    };

    const searchGithubFollowers = async (user) => {
        toggleError();
        const response = await axios(`${rootUrl}/users/${user}/followers`).catch((err) => {
            if (err.response.status === 403) {
                toggleError(true, 'Sorry, you have exceeded your hourly rate limit!');
            }
            if (err.response.status === 404) {
                toggleError(true, 'Username does not exist, please try again!');
            }
        });
        if (response) {
            setFollowers(response.data);
        }
    };

    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`)
            .then(({ data }) => {
                let remaining = data.rate.remaining;
                setRequests(remaining);
                if (remaining === 0) {
                    toggleError(true, 'Sorry, you have exceeded your hourly rate limit!');
                }
            })
            .catch((err) => console.log(err));
    };

    const toggleError = (show = false, msg = 'Username does not exist, please try again!') => {
        setError({ show, msg });
    };

    useEffect(checkRequests, [githubUser]);

    useEffect(() => {
        searchGithubUser('margusliinev');
        searchGithubFollowers('margusliinev');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            searchGithubUser(user);
            searchGithubFollowers(user);
        } else {
            toggleError(true, 'Please enter a username!');
            return;
        }
    };

    return <GithubContext.Provider value={{ githubUser, followers, user, setUser, handleSubmit, requests, error, searchGithubUser, loading }}>{children}</GithubContext.Provider>;
};

export { GithubContext, GithubProvider };
