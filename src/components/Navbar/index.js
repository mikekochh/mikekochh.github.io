import './index.scss';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/images/blackLogo.jpg";

const Navbar = ({ handleIconClick }) => {

    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const homeElement = document.querySelector('.home');
            const aboutElement = document.querySelector('.about');
            const contactElement = document.querySelector('.contact');
            const scrollTop = window.scrollY;

            if (homeElement && scrollTop < homeElement.offsetTop + homeElement.offsetHeight) {
                setActiveLink('home');
            }
            else if (aboutElement && scrollTop >= aboutElement.offsetTop - 1 && scrollTop < aboutElement.offsetTop + aboutElement.offsetHeight) {
                setActiveLink('about');
            }
            if (contactElement && scrollTop + window.innerHeight > document.documentElement.scrollHeight - 1) {
                setActiveLink('contact');
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='nav-bar'>
            <Link to='/' className='logo-container'>
                <img className='logo' src={logo} alt='Logo'/>
                <p className='company-name'>Michael Koch Solutions</p>
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
