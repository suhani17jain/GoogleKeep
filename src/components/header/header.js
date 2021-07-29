import React from "react";
import "./header.css";
import SearchBar from './searchBar/searchBar'


const Header = () => {
    const logo = (
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="logo"
        />
      )
  return (
    <div className="header">
        <div className='logoSection'>
        <div className='bars'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='logo'>
          {logo}
          <h3>Keep</h3>
      </div>
        </div>
      <div className='searchBar'> 
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
