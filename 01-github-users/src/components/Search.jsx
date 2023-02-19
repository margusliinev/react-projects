import React, { useContext } from 'react';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../context/context';

const Search = () => {
    return (
        <section className='dashboard-search'>
            <div className='search-container'>
                <form class='form'>
                    <MdSearch />
                    <input type='text' placeholder='Enter Github User' class='form-input' />
                    <button type='submit' class='btn'>
                        Search
                    </button>
                </form>
                <p className='requests'>Requests: 60 / 60</p>
            </div>
        </section>
    );
};

export default Search;
