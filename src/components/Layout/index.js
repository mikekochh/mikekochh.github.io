import Navbar from '../Navbar';
import HomeDetails from '../HomeDetails';
import AboutDetails from '../AboutDetails';
import ContactDetails from '../ContactDetails';
import { useEffect } from 'react';
import './index.scss';

const Layout = () => {

    useEffect(() => {
        window.history.scrollRestoration = 'manual';
    }, []);

    const handleIconClick = (className) => () => { 
        const targetElement = document.querySelector(`.${className}`);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="layout-container"> {/* Add the class here */}
            <Navbar handleIconClick={handleIconClick} />
            <HomeDetails handleIconClick={handleIconClick} />
            <AboutDetails handleIconClick={handleIconClick} />
            <ContactDetails />
        </div>
    );
}

export default Layout;
