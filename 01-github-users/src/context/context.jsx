import React, { useState, useEffect } from 'react';
import mockFollowers from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockUser from './mockData.js/mockUser';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
    const [followers, setFollowers] = useState(mockFollowers);
    const [repos, setRepos] = useState(mockRepos);
    const [githubUser, setGithubUser] = useState(mockUser);

    return <GithubContext.Provider value={{ githubUser, repos, followers }}>{children}</GithubContext.Provider>;
};

export { GithubContext, GithubProvider };
