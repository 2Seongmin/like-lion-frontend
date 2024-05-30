import React from "react";
import { Link } from 'react-router-dom';
import "./css/header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img src='/image/가로형로고.png' className='logo' alt='logo'></img>
        <p>
          <span className='text'><Link to="/news">뉴스</Link></span>
          <span className='text'><Link to="/media">미디어</Link></span>
        </p>
        <div className="search">
          <form>
            <input type='text' placeholder='Search'></input>
            <img src='/image/magnify.png' alt='search'></img>
          </form>
        </div>
        <h3 className='login'><Link to="/">로그인</Link></h3>
      </div>
    </div>
  );
};

export default Header;
