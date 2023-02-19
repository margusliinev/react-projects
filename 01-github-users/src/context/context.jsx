import React, { useState, useEffect } from 'react';
import mockFollowers from './mockData.js/mockFollowers';
import mockUser from './mockData.js/mockUser';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
    const [followers, setFollowers] = useState(mockFollowers);
    const [githubUser, setGithubUser] = useState(mockUser);
    const [user, setUser] = useState('');
    const [requests, setRequests] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ show: false, msg: 'Username does not exist, please try again!' });

    const searchGithubUser = async (user) => {
        toggleError();
        const response = await axios(`${rootUrl}/users/${user}`).catch((err) => console.log(err));
        if (response) {
            setGithubUser(response.data);
        } else {
            toggleError(true, 'Username does not exist, please try again!');
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

    useEffect(checkRequests, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            searchGithubUser(user);
        } else {
            return;
        }
    };

    return <GithubContext.Provider value={{ githubUser, followers, user, setUser, handleSubmit, requests, error, searchGithubUser }}>{children}</GithubContext.Provider>;
};

export { GithubContext, GithubProvider };
