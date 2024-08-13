import Navbar from '../Navbar';
import HomeDetails from '../HomeDetails';
import AboutDetails from '../AboutDetails';
import ContactDetails from '../ContactDetails';
import { useEffect, useState } from 'react';
import './index.scss';

const Layout = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        window.history.scrollRestoration = 'manual';
    }, []);

    const handleIconClick = (className) => () => {
        const targetElement = document.querySelector(`.${className}`);
        if (targetElement) {
            const navbarHeight = 70;
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navbarHeight;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
      const handleResize = () => {
        const mobileThreshold = 768;
        setIsMobile(window.innerWidth <= mobileThreshold);
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <div className="layout-container">
            <Navbar handleIconClick={handleIconClick} isMobile={isMobile} />
            <HomeDetails handleIconClick={handleIconClick} isMobile={isMobile} />
            <AboutDetails handleIconClick={handleIconClick} isMobile={isMobile} />
            <ContactDetails isMobile={isMobile} />
        </div>
    );
}

export default Layout;
