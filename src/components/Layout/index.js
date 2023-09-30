import Sidebar from '../Sidebar';
import HomeDetails from '../HomeDetails';
import AboutDetails from '../AboutDetails';
import ContactDetails from '../ContactDetails';
import { ThemeContext } from '../../context/theme-context';
import { useEffect, useState } from 'react';
import '../../styles/theme-variables.scss'
import './index.scss';

const Layout = () => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('postload');
                    entry.target.classList.remove('preload');
                } else {
                    entry.target.classList.remove('postload');
                    entry.target.classList.add('preload');}
            });
         });

        const hiddenElements = document.querySelectorAll('.preload');
        hiddenElements.forEach((element) => observer.observe(element));
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`theme-${theme}`}>
                <Sidebar theme={theme} setTheme={setTheme}/>
                <HomeDetails />
                <AboutDetails />
                <ContactDetails />
            </div>
        </ThemeContext.Provider>

    );
}

export default Layout;