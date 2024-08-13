import './index.scss';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/images/blackLogo.jpg";

const Navbar = ({ handleIconClick, isMobile }) => {

    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const homeElement = document.querySelector('.home');
            const aboutElement = document.querySelector('.about');
            const contactElement = document.querySelector('.contact');
            const scrollTop = window.scrollY;

            // Adjust for the navbar height
            const navbarHeight = 500;

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

    return (
        <div className='nav-bar'>
            <Link to='/' className='logo-container'>
                <img className='logo' src={logo} alt='Logo'/>
                <p className='company-name hidden md:flex'>Michael Koch Solutions</p>
            </Link>
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
        </div>
    );

}

export default Navbar;
