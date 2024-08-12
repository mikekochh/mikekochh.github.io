import './index.scss'
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ theme, setTheme }) => {

    // This really should look at what the theme is coming in, and set the logo accordingly

    const [logo, setLogo] = useState(darkLogo);
    const [activeLink, setActiveLink] = useState('home');

    const highlightLogo = () => {
        if (theme === 'light') {
            setLogo(darkLogo);
        }
        else {
            setLogo(lightLogo);
        }
    }

    const unhighlightLogo = () => {
        if (theme === 'light') {
            setLogo(lightLogo);
        }
        else {
            setLogo(darkLogo);
        }
    }

    // const handleSwitchChange = () => {
    //     setTheme(theme === 'light' ? 'dark' : 'light');
    //     highlightLogo();
    // }

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

    const handleIconClick = (className) => () => { 
        const targetElement = document.querySelector(`.${className}`);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className='nav-bar'>
            <Link to='/'>
                <img className='logo' src={logo} alt='Logo' onMouseEnter={highlightLogo} onMouseLeave={unhighlightLogo} onClick={() => setTheme(theme === 'light' ? 'dark': 'light')} />
            </Link>
            <nav>
                <NavLink exact className="NavLinkHome" onClick={handleIconClick('home')}>
                    <FontAwesomeIcon icon={faHome} color={activeLink === 'home' ? '#FFA500' : '#4d4d4e'} />
                </NavLink>
                <NavLink exact className="NavLinkAbout" onClick={handleIconClick('about')}>
                    <FontAwesomeIcon icon={faUser} color={activeLink === 'about' ? '#FFA500' : '#4d4d4e'} />
                </NavLink>
                <NavLink exact className="NavLinkContact" onClick={handleIconClick('contact')}>
                    <FontAwesomeIcon icon={faEnvelope} color={activeLink === 'contact' ? '#FFA500' : '#4d4d4e'} />
                </NavLink>
            </nav>
        </div>
    )

}

export default Sidebar