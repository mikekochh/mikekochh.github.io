import './index.scss';
import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/images/blackLogo.jpg";
import menuIcon from "../../assets/images/menu.png";

const Navbar = ({ handleIconClick, isMobile }) => {
    const [activeLink, setActiveLink] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const homeElement = document.querySelector('.home');
            const aboutElement = document.querySelector('.about');
            const contactElement = document.querySelector('.contact');
            const scrollTop = window.scrollY;

            const navbarHeight = 70;

            if (homeElement && scrollTop < homeElement.offsetTop + homeElement.offsetHeight - navbarHeight) {
                setActiveLink('home');
            } else if (
                aboutElement &&
                scrollTop >= aboutElement.offsetTop - navbarHeight &&
                scrollTop < aboutElement.offsetTop + aboutElement.offsetHeight - navbarHeight
            ) {
                setActiveLink('about');
            } else if (
                contactElement &&
                scrollTop >= contactElement.offsetTop - navbarHeight &&
                scrollTop < contactElement.offsetTop + contactElement.offsetHeight - navbarHeight
            ) {
                setActiveLink('contact');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = useCallback(() => {
        console.log("toggleMenu running...");
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    }, []);

    const handleMobileMenuClick = (pageSection) => {
        console.log(`Navigating to: ${pageSection}`);
        toggleMenu();
        handleIconClick(pageSection)();
    };

    return (
        <div className='nav-bar'>
            <Link to='/' className='logo-container'>
                <img className='logo' src={logo} alt='Logo' />
                <p className='company-name hidden md:flex'>Michael Koch</p>
            </Link>
            {isMobile ? (
                <div className='menu-icon' onClick={toggleMenu}>
                    <img src={menuIcon} alt='Menu' width={40} height={40} />
                </div>
            ) : (
                <nav>
                    <NavLink
                        exact
                        className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                        onClick={handleIconClick('home')}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        exact
                        className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                        onClick={handleIconClick('about')}
                    >
                        About
                    </NavLink>
                    <NavLink
                        exact
                        className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                        onClick={handleIconClick('contact')}
                    >
                        Contact
                    </NavLink>
                </nav>
            )}
            {menuOpen && isMobile && (
                <div className='mobile-menu'>
                    <NavLink
                        exact
                        className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                        onClick={() => handleMobileMenuClick('home')}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        exact
                        className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                        onClick={() => handleMobileMenuClick('about')}
                    >
                        About
                    </NavLink>
                    <NavLink
                        exact
                        className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                        onClick={() => handleMobileMenuClick('contact')}
                    >
                        Contact
                    </NavLink>
                </div>
            )}
        </div>
    );
}

export default Navbar;
