import './index.scss'
import handsomeMan from '../../assets/images/handsomeMan.jpg';
import longHandsomeMan from '../../assets/images/longHandsomeMan.jpg';
import PageDescription from './PageDescription';
import { useEffect } from 'react';

const HomeDetails = () => {    
    useEffect(() => {
        const letterSpans = document.querySelectorAll('.PageHeader span');

        function revealLetters() { 
            letterSpans.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.add('inline-block');
                    span.classList.remove('hidden');
                }, 200 * (idx + 1));
            });
        }
    
        window.addEventListener('load', revealLetters);
    }, []);

    return (
        <div className='home'>
            <br />
            <img src={handsomeMan} alt="Michael Koch" className="ProfilePic max-md:hidden preload" />
            <img src={longHandsomeMan} alt="Michael Koch" className="ProfilePicMobile md:hidden preload" />
            <h1 className="PageHeader text-100 font-mono md:pl-80 pl-32"> 
                <span className="hidden">H</span>
                <span className="hidden">e</span>
                <span className="hidden">l</span>
                <span className="hidden">l</span>
                <span className="hidden">o</span>
            </h1> 
            <div className="PageDescription pl-80 font-bold md:pl-100 pr-5">
                <PageDescription />
            </div>
        </div>
    )
}

export default HomeDetails;