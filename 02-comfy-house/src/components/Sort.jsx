import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const Sort = () => {
    const { filtered_products, grid_view, setGridView, setListView, sort, updateSort } = useContext(FilterContext);
    return (
        <div className='sort'>
            <div className='sort-buttons-container'>
                <button type='button' className={grid_view ? 'grid-button-active' : 'grid-button'} onClick={setGridView}>
                    <BsFillGridFill />
                </button>
                <button type='button' className={!grid_view ? 'list-button-active' : 'list-button'} onClick={setListView}>
                    <BsList />
                </button>
            </div>
            <p className='products-count'>{filtered_products.length} Products Found</p>
            <div className='connector'></div>
            <div>
                <label htmlFor='sort'>Sort By </label>
                <select name='sort' id='sort' value={sort} onChange={updateSort}>
                    <option value='price-lowest'>Price (Lowest)</option>
                    <option value='price-highest'>Price (Highest)</option>
                    <option value='name-az'>Name (A - Z)</option>
                    <option value='name-za'>Name (Z - A)</option>
                </select>
            </div>
        </div>
    );
};

export default Sort;
