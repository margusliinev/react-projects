import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../features/coins/coinsSlice';

const CoinsPagination = () => {
    const { numOfPages, page } = useSelector((store) => store.coins);
    const dispatch = useDispatch();

    const pages = Array.from({ length: numOfPages }, (_, index) => {
        return index + 1;
    });

    const nextPage = () => {
        let newPage = page + 1;
        if (newPage > numOfPages) {
            newPage = 1;
        }
        dispatch(changePage(newPage));
    };

    const prevPage = () => {
        let newPage = page - 1;
        if (newPage < 1) {
            newPage = numOfPages;
        }
        dispatch(changePage(newPage));
    };

    return (
        <div className='pagination'>
            <button className='prev-btn' onClick={prevPage}>
                <HiChevronDoubleLeft />
                prev
            </button>
            {pages.map((pageNumber) => {
                return (
                    <button type='button' className={pageNumber === page ? 'page-btn active-page' : 'page-btn'} key={pageNumber} onClick={() => dispatch(changePage(pageNumber))}>
                        {pageNumber}
                    </button>
                );
            })}
            <button className='next-btn' onClick={nextPage}>
                next
                <HiChevronDoubleRight />
            </button>
        </div>
    );
};

export default CoinsPagination;
