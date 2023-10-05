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
        <div className='home md:pl-100 max-md:pl-20'>
            <br />
            <img src={handsomeMan} alt="Michael Koch" className="ProfilePic max-md:hidden preload m-5" />
            <img src={longHandsomeMan} alt="Michael Koch" className="ProfilePicMobile md:hidden preload text-center" />
            <h1 className="text-100 font-mono preloadHello max-md:text-center">Hello</h1> 
            <div className="PageDescription max-md:pl-40 font-bold pr-15">
                <PageDescription />
            </div>
        </div>
    )
}

export default HomeDetails;