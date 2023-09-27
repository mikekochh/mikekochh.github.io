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

        const delayedItems = document.querySelectorAll('.delayedItem');
    
        setTimeout(() => {
            delayedItems.forEach((element) => element.classList.remove('delayedItem'));
        }, 2000);
    }, []);

    return (
        <div className='home'>
            <img src={handsomeMan} alt="Michael Koch" className="ProfilePic max-md:hidden preload delayedItem" />
            <img src={longHandsomeMan} alt="Michael Koch" className="ProfilePicMobile md:hidden preload delayedItem" />
            <h1 className="PageHeader max-md:hidden preload">Hello</h1>        
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