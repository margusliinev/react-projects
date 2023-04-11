import React from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../features/exchanges/exchangesSlice';

const ExchangesPagination = () => {
    const dispatch = useDispatch();
    const { sorted_exchanges, perPage, page } = useSelector((store) => store.exchanges);

    const pages = Array.from({ length: sorted_exchanges.length / parseInt(perPage) }, (_, index) => {
        return index + 1;
    });

    const nextPage = () => {
        let newPage = page + 1;
        if (newPage > pages.length) {
            newPage = 1;
        }
        dispatch(changePage(newPage));
    };

    const prevPage = () => {
        let newPage = page - 1;
        if (newPage < 1) {
            newPage = pages.length;
        }
        dispatch(changePage(newPage));
    };

    return (
        <div className='pagination'>
            <button className='prev-btn' onClick={prevPage}>
                <HiChevronDoubleLeft />
                prev
            </button>
            <div>
                {pages.map((pageNumber) => {
                    return (
                        <button type='button' className={pageNumber === page ? 'page-btn active-page' : 'page-btn'} key={pageNumber} onClick={() => dispatch(changePage(pageNumber))}>
                            {pageNumber}
                        </button>
                    );
                })}
            </div>
            <button className='next-btn' onClick={nextPage}>
                next
                <HiChevronDoubleRight />
            </button>
        </div>
    );
};

export default ExchangesPagination;
