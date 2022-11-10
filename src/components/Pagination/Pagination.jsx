import React from 'react'
import "./Pagination.scss";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

function Pagination({ totalProducts, productsPerPage, currentPage, setCurrentPage }) {
    // const totalPages = Math.ceil(100 / 12); // for example
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const goPrev = () => {
        const isFirstPage = currentPage === 1;
        const newIndex = isFirstPage ? pages.length : currentPage - 1;
        setCurrentPage(newIndex);
    }

    const goNext = () => {
        const isLastPage = currentPage === pages.length;
        const newIndex = isLastPage ? 1 : currentPage + 1;
        setCurrentPage(newIndex);
    }

    return (
        <div className='app__pagination'>
            <p>Page {currentPage} of {totalPages}</p>
            <div>
                <AiOutlineLeft onClick={goPrev} />
                {
                    pages.map((page, index) => {
                        return <button key={index} className={page === currentPage ? "active" : "pagination-btn"} onClick={() => setCurrentPage(page)}>{index + 1}</button>
                    })
                }
                <AiOutlineRight onClick={goNext} />
            </div>
        </div>
    )
}

export default Pagination