import React from 'react'

const Pagination = ({ setFilterOptions, filterOptions, pages }) => {
console.log(pages)
    const handlePageChange = (pageNumber) => {
        setFilterOptions({
            ...filterOptions,
            page: pageNumber
        });
    }

    const renderPages = [...Array(pages).keys()].map((page) => {
        return <li key={page} onClick={() => handlePageChange(page+1)} className='pagination-list-item'>{page+1}</li>;
    })

    return (
        <div className='pagination'>
            <ul className='pagination-list'>{renderPages}</ul>
        </div>
    )
}

export default Pagination
