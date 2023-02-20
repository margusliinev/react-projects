import React, { useContext } from 'react';
import Info from '../components/Info';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import User from '../components/User';
import { GithubContext } from '../context/context';

const Dashboard = () => {
    const { loading } = useContext(GithubContext);
    if (loading) {
        return (
            <main className='dashboard'>
                <Navbar />
                <Search />
                <div className='loader'></div>
            </main>
        );
    }
    return (
        <main className='dashboard'>
            <Navbar />
            <Search />
            <Info />
            <User />
        </main>
    );
};

export default Dashboard;
