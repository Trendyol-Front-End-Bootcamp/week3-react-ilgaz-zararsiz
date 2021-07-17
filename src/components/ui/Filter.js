import React from 'react'

const Filter = ({ setFilterOptions, filterOptions }) => {

    const handleStatusChange = (e) => {
        setFilterOptions({
            ...filterOptions,
            status: e.target.value
        });
    }

    const handleGenderChange = (e) => {
        setFilterOptions({
            ...filterOptions,
            gender: e.target.value
        });
    }

    return (
        <div className='filter-section'>
            <form className='filter-section-form'>
                <label className='filter-section-form-label'>Gender</label>
                <select onChange={handleGenderChange} className='filter-section-form-select'>
                    <option value=''>All</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='genderless'>Genderless</option>
                </select>
                <label className='filter-section-form-label'>Status</label>
                <select onChange={handleStatusChange} className='filter-section-form-select'>
                    <option value=''>All</option>
                    <option value='dead'>Dead</option>
                    <option value='alive'>Alive</option>
                    <option value='unknown'>Unknown</option>
                </select>
            </form>
        </div>
    )
}

export default Filter
