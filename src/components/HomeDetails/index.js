import './index.scss'
import handsomeMan from '../../assets/images/handsomeMan.jpg';
import longHandsomeMan from '../../assets/images/longHandsomeMan.jpg';
import PageDescription from './PageDescription';

const HomeDetails = () => {
    return (
        <div>
            <img src={handsomeMan} alt="Michael Koch" className="ProfilePic max-md:hidden" />
            <img src={longHandsomeMan} alt="Michael Koch" className="ProfilePicMobile md:hidden" />
            <h1 className="PageHeader max-md:hidden">Hello</h1>        
            <h1 className="PageHeaderMobile md:hidden">Hello</h1>      
            <div className="PageDescription max-md:hidden md:PageDescriptionMobile">
                <PageDescription />
            </div>
            <div className="md:hidden PageDescriptionMobile font-bold">
                <PageDescription />
            </div>
        </div>
    )
}

export default HomeDetails;