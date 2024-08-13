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
                        Leveraging software solutions to drive business growth and transform your ideas into high-quality digital products.
                    </p>
                ) : (
                    <p className="subheader-mobile golden-ratio-15">
                        Leveraging software solutions to drive business growth and transform your ideas into high-quality digital products.
                    </p>
                )}
                <button 
                    className="get-started-button"
                    onClick={handleIconClick('contact')}
                >
                    Get started
                </button>
                <div className="response-time">
                    <img src={handsomeMan} alt="Michael Koch" className="profile-pic" />
                    <p className="golden-ratio-1">Response time: 1-2 days</p>
                </div>
            </div>
        </div>
    );
}

export default HomeDetails;
