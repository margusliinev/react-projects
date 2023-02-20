import React, { useContext } from 'react';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../context/context';

const Search = () => {
    const { user, setUser, handleSubmit, requests, error } = useContext(GithubContext);
    return (
        <section className='dashboard-search'>
            <p className={error.show ? 'error-msg show-error' : 'error-msg'}>{error.msg}</p>
            <div className='search-container'>
                <form className='form' onSubmit={handleSubmit}>
                    <MdSearch />
                    <input type='text' placeholder='Enter Github User' className='form-input' value={user} onChange={(e) => setUser(e.target.value)} />
                    <button type='submit' className='btn'>
                        Search
                    </button>
                </form>
                <p className='requests'>Requests: {requests} / 60</p>
            </div>
        </section>
    );
};

export default Search;
