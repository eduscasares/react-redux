import React from 'react';
import FilterContainer from '../containers/FilterContainer';

const FilterOptions = () => {
    return (
        <div className='filters'>
            {/* Filter containers */}
            <FilterContainer filter='SHOW_ALL'>
                All
            </FilterContainer>

            <FilterContainer filter='SHOW_ACTIVE'>
                Show Active
            </FilterContainer>

            <FilterContainer filter='SHOW_COMPLETED'>
                Show Completed
            </FilterContainer>
        </div>
    );
}

export default FilterOptions;
