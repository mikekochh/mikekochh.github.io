import React, { useState, useEffect } from 'react';
import './index.scss';
import handsomeMan from '../../assets/images/handsomeMan.jpg';


const HomeDetails = ({ handleIconClick, isMobile }) => {

    return (
        <div className='home content-section'>
            <div className="banner-section">
                <h1 className="main-title golden-ratio-3">Software Development Done Right</h1>
                {!isMobile ? (
                    <p className="subheader golden-ratio-2">
                        Exceeding expectations by delivering high-quality tech products and helping businesses achieve their goals.
                    </p>
                ) : (
                    <p className="subheader-mobile golden-ratio-15">
                        Exceeding expectations by delivering high-quality tech products and helping businesses achieve their goals.
                    </p>
                )}
                <button 
                    className="get-started-button"
                    onClick={handleIconClick('contact')}
                >
                    Contact Me
                </button>
                <div className="response-time">
                    <img src={handsomeMan} alt="Michael Koch" className="profile-pic" />
                    <p className="golden-ratio-1">Expect a reply in 1-2 days</p>
                </div>
            </div>
        </div>
    );
}

export default HomeDetails;
