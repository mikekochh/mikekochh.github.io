import './index.scss'
import handsomeMan from '../../assets/images/handsomeMan.jpg';
import longHandsomeMan from '../../assets/images/longHandsomeMan.jpg';
import PageDescription from './PageDescription';
import { useEffect } from 'react';

const HomeDetails = () => {    
    useEffect(() => {
        const displayHello = () => {
            const hiddenElements = document.querySelectorAll('.preloadHello');
            hiddenElements.forEach((element) => {
                element.classList.remove('preloadHello');
                element.classList.add('postload');
            });
        }

        setTimeout(() => {
            displayHello();
        }, 1000);
    }, []);

    return (
        <div className='home'>
            <br />
            <img src={handsomeMan} alt="Michael Koch" className="ProfilePic max-md:hidden preload" />
            <img src={longHandsomeMan} alt="Michael Koch" className="ProfilePicMobile md:hidden preload" />
            <h1 className="PageHeader text-100 font-mono md:pl-100 pl-32 preloadHello">Hello</h1> 
            <div className="PageDescription pl-80 font-bold md:pl-100 pr-5">
                <PageDescription />
            </div>
        </div>
    )
}

export default HomeDetails;