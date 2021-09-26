import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <div className="header-section">
            <div className="img-section">
                <img src="logo.png" alt="" />
            </div>
            <div className="title-section">
                <h1>Talk Show on <span className="title"> World Economics!</span></h1>
                <h3>Select a handful of <span className="title"> individuals </span>for the Talk Show</h3>
                <h3>Total Budget: <span className="title">1.5 Million USD ($  1,500,000) </span></h3>
            </div>
        </div>
    )
}
export default Header;