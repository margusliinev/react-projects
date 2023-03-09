import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import { FaCheck } from 'react-icons/fa';
import { formatPrice } from '../utils/formatPrice';

const Filters = () => {
    const { all_products, filters, updateFilters, clearFilters } = useContext(FilterContext);
    const { search, category, company, colors, min_price, max_price, price, shipping } = filters;

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
    let productColors = all_products.reduce((acc, cur) => {
        cur.colors.forEach((color) => {
            if (!acc.includes(color)) {
                acc.push(color);
            }
        });
        return acc;
    }, []);

    return (
        <>
            <form className='filters' onSubmit={(e) => e.preventDefault()}>
                <div className='form-control'>
                    <h6>Search</h6>
                    <input type='text' className='search-input' placeholder='Chair' name='search' value={search} onChange={updateFilters} />
                </div>
                <div className='form-control'>
                    <h6>Category</h6>
                    <div className='category-buttons'>
                        {categories.map((productCategory) => {
                            return (
                                <button key={productCategory} type='button' name='category' className={category === productCategory ? 'category-btn category-btn-active' : 'category-btn'} value={category} onClick={updateFilters}>
                                    {productCategory}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className='form-control'>
                    <h6>Company</h6>
                    <select name='company' id='company' value={company} onChange={updateFilters}>
                        {companies.map((company) => {
                            return <option key={company}>{company}</option>;
                        })}
                    </select>
                </div>
                <div className='form-control'>
                    <h6>Colors</h6>
                    <div className='color-buttons'>
                        <button type='button' name='colors' data-color='all' className={colors === 'all' ? 'color-btn-all color-btn-all-active' : 'color-btn-all'} value={colors} onClick={updateFilters}>
                            All
                        </button>
                        {productColors.map((color) => {
                            return (
                                <button key={color} type='button' name='colors' data-color={color} className={colors === color ? 'color-btn color-btn-active' : 'color-btn'} style={{ backgroundColor: color }} value={colors} onClick={updateFilters}>
                                    {color === colors ? <FaCheck /> : null}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className='form-control'>
                    <h6>Price</h6>
                    <p>{formatPrice(price)}</p>
                    <input type='range' id='price' name='price' min={min_price} max={max_price} value={price} onChange={updateFilters} />
                </div>
                <div className='form-control'>
                    <label htmlFor='shipping'>Free Shipping</label>
                    <input type='checkbox' name='shipping' id='shipping' checked={shipping} onChange={updateFilters} />
                </div>
                <button type='button' className='btn clear-btn' onClick={clearFilters}>
                    Clear Filters
                </button>
            </form>
        </>
    );
};

export default Filters;
