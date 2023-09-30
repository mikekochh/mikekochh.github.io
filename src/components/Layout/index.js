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
        const displayComponents = () => {
            const hiddenElements = document.querySelectorAll('.preload');
            hiddenElements.forEach((element) => {
                element.classList.remove('preload');
                element.classList.add('postload');
            });
        }

        setTimeout(() => {
            displayComponents();
        }, 4000);
    })

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`theme-${theme}`}>
            <div>
                <Sidebar theme={theme} setTheme={setTheme}/>
            </div>
                <HomeDetails />
                <AboutDetails />
                <ContactDetails />
            </div>
        </ThemeContext.Provider>

    );
}

export default Layout;