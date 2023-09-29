import Sidebar from '../Sidebar';
import HomeDetails from '../HomeDetails';
import AboutDetails from '../AboutDetails';
import ContactDetails from '../ContactDetails';
import { ThemeContext } from '../../context/theme-context';
import { useState } from 'react';
import '../../styles/theme-variables.scss'

const Layout = () => {

    const [theme, setTheme] = useState('light');

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