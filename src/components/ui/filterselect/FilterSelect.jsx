import React from 'react'
import './filterSelect.css'

const FilterSelect = ({ state, setState, options, label }) => {
    return (
        <div className="filter-select-wrapper">
            <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="filter-select"
            >
                <option value="">{label}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default FilterSelect