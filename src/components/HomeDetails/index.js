import './index.scss'
import handsomeMan from '../../assets/images/handsomeMan.jpg';
import longHandsomeMan from '../../assets/images/longHandsomeMan.jpg';
import PageDescription from './PageDescription';
import { useEffect } from 'react';

const HomeDetails = () => {    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('postload');
                    entry.target.classList.remove('preload');
                } else {
                    entry.target.classList.remove('postload');
                }
            });
         });

        const hiddenElements = document.querySelectorAll('.preload');
        hiddenElements.forEach((element) => observer.observe(element));

        const letterSpans = document.querySelectorAll('.PageHeader span');
       

        const dotsSpan = Array.from(document.querySelectorAll('#repeat')).reverse();
        const endLine = document.querySelector('#endLine');

        function repeatEndLine() {
            endLine.classList.add('hidden');
            endLine.classList.remove('inline-block');
            setTimeout(() => {
                endLine.classList.add('inline-block');
                endLine.classList.remove('hidden');
            }, 1000);
        }

        function revealLetters() { 
            letterSpans.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.add('inline-block');
                    span.classList.remove('hidden');
                }, 200 * (idx + 1));
            });
            setTimeout(() => {
                repeatEndLine();
            }, 2000);
        }
    
        window.addEventListener('load', revealLetters);

        const delayedItems = document.querySelectorAll('.delayedItem');
    
        setTimeout(() => {
            delayedItems.forEach((element) => element.classList.remove('delayedItem'));
        }, 2000);
    }, []);

    return (
        <div className='home'>
            <img src={handsomeMan} alt="Michael Koch" className="ProfilePic max-md:hidden preload delayedItem" />
            <img src={longHandsomeMan} alt="Michael Koch" className="ProfilePicMobile md:hidden preload delayedItem" />
            <h1 className="PageHeader max-md:hidden ">
                <span className="hidden">H</span>
                <span className="hidden" id="1">e</span>
                <span className="hidden" id="2">l</span>
                <span className="hidden" id="3">l</span>
                <span className="hidden" id="4">o</span>
                <span className="hidden" id="endLine">|</span>
            </h1>        
            <h1 className="PageHeaderMobile md:hidden preload">Hello</h1>      
            <div className="PageDescription max-md:hidden md:PageDescriptionMobile font-bold">
                <PageDescription />
            </div>
            <div className="md:hidden PageDescriptionMobile font-bold preload delayedItem">
                <PageDescription />
            </div>
        </div>
    )
}

export default HomeDetails;