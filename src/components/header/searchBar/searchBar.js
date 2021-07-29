import React from "react";
import './searchBar.css';
import { AiOutlineSearch } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

const SearchBar = () => {
    return(
        <div className='searchbar'>
            <div className='searchInput'>
                <input className='input' placeholder='Search' autoComplete='off'></input>
            </div>
            <button className='closeButton button'><GrFormClose /></button>
            <button className='searchButton button'>< AiOutlineSearch /></button>
        </div>
    );
}

export default SearchBar;
