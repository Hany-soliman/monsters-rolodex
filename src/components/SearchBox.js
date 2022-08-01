import React from "react";

const SearchBox = ({searchField, onSearchChange})=>{
    return(
        <div className="header-container">
            <input className="searchBar" type="search" placeholder="Search robots" onChange={onSearchChange}/>
        </div>

    )
}

export default SearchBox