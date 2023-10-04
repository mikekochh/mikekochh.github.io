import './index.scss'
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import blackLogo from '../../assets/images/blackLogo.jpg';
import highlightedLogo from '../../assets/images/highlightedLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = ({ theme, setTheme }) => {

    const [logo, setLogo] = useState(blackLogo);
    const [activeLink, setActiveLink] = useState('home');

    const highlightLogo = () => {
        setLogo(highlightedLogo);
    }

    const unhighlightLogo = () => {
        setLogo(blackLogo);
    }

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
                <img className='logo' src={logo} alt='Logo' onMouseEnter={highlightLogo} onMouseLeave={unhighlightLogo} />
            </Link>
            <ul>
                <li className='linkedinLink'>
                    <a href='https://www.linkedin.com/in/michael-koch-6378831a2/' target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"  />
                    </a>
                </li>
                <li>
                    <a href='https://twitter.com/MichaelKochDev' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faXTwitter} color="#4d4d4e"  />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/mikekochh' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"  />
                    </a>
                </li>
            </ul>
            <div className="flex justify-center mt-2 mb-4" >
                <input type="checkbox" className="checkbox" id="checkbox" onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
                <label htmlFor="checkbox" className="flexBetween w-16 h-8 bg-black rounded-2xl p-1 relative label cursor-pointer">
                <div className="toggle">
                    <FontAwesomeIcon icon={faSun} className="fa-sun" />
                    <FontAwesomeIcon icon={faMoon} className="fa-moon" />
                </div>
                <div className="w-6 h-6 absolute bg-white rounded-full ball" />
                </label>
            </div>
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