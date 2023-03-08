import React, { useContext, useState } from 'react';
import { FilterContext } from '../context/FilterContext';
import { FaCheck } from 'react-icons/fa';
import { formatPrice } from '../utils/formatPrice';

const Filters = () => {
    const { all_products, filters } = useContext(FilterContext);
    const { min_price, max_price, price } = filters;
    const [colorBtn, setColorBtn] = useState('all');

    let categories = all_products.reduce(
        (acc, cur) => {
            if (!acc.includes(cur.category)) {
                acc.push(cur.category);
            }
            return acc;
        },
        ['all']
    );
    let companies = all_products.reduce(
        (acc, cur) => {
            if (!acc.includes(cur.company)) {
                acc.push(cur.company);
            }
            return acc;
        },
        ['all']
    );
    let colors = all_products.reduce((acc, cur) => {
        cur.colors.forEach((color) => {
            if (!acc.includes(color)) {
                acc.push(color);
            }
        });
        return acc;
    }, []);

    return (
        <>
            <form className='filters'>
                <div className='form-control'>
                    <h6>Search</h6>
                    <input type='text' name='search' className='search-input' placeholder='Chair' />
                </div>
                <div className='form-control'>
                    <h6>Category</h6>
                    <div className='category-buttons'>
                        {categories.map((category) => {
                            return (
                                <button key={category} type='button' name={category} className='category-btn'>
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className='form-control'>
                    <h6>Company</h6>
                    <select name='company' id='company'>
                        {companies.map((company) => {
                            return <option key={company}>{company}</option>;
                        })}
                    </select>
                </div>
                <div className='form-control'>
                    <h6>Colors</h6>
                    <div className='color-buttons'>
                        <button type='button' name='all' className={colorBtn === 'all' ? 'color-btn-all color-btn-all-active' : 'color-btn-all'} onClick={() => setColorBtn('all')}>
                            All
                        </button>
                        {colors.map((color) => {
                            return (
                                <button key={color} type='button' name={color} className='color-btn' style={{ backgroundColor: color }} onClick={() => setColorBtn(color)}>
                                    {color === colorBtn ? <FaCheck /> : ''}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className='form-control'>
                    <h6>Price</h6>
                    <p>{formatPrice(price)}</p>
                    <input type='range' id='price' name='price' min={min_price} max={max_price} />
                </div>
                <div className='form-control'>
                    <label htmlFor='shipping'>Free Shipping</label>
                    <input type='checkbox' id='shipping' />
                </div>
                <button type='button' className='btn clear-btn'>
                    Clear Filters
                </button>
            </form>
        </>
    );
};

export default Filters;
