import './index.scss'
import { JPMorganDetails, CCLRDetails, MaxetaDetails } from './CompanyDetails';
import { useEffect } from 'react';

const JobDetails = ({companyName, timeFrame, companyID}) => {

    const companyDetail = (companyID) => {
        switch(companyID) {
            case 1:
                return <JPMorganDetails />;
            case 2:
                return <CCLRDetails />;
            case 3:
                return <MaxetaDetails />;
            default:
                return <div></div>;
        }
    }

    return (        
        <div>
            <p className="text-5xl mt-10 preload delayedItem">{companyName}</p>
            <p className="text-4xl mt-5 preload delayedItem">{timeFrame}</p>
            <div>
                {companyDetail(companyID)}
            </div>
        </div>    

    );

}

const AboutDetails = () => {

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
    }, []);

    return (
        <div className="ml-40 font-mono font-bold text-white mb-100 about">
            <h1 className="mt-40 text-9xl text-center preload delayedItem">About Me</h1>
            <p className="text-7xl mt-10 preload delayedItem">Work Experience</p>
            <JobDetails companyName="JP Morgan & Chase" timeFrame="March 2023 - Present" companyID={1} />
            <br/>
            <br/>
            <JobDetails companyName="Center City Legal & Reporting, Inc." timeFrame="May 2021 - March 2023" companyID={2} />
            <br/>
            <br/>
            <JobDetails companyName="Maxeta Technologies, Inc." timeFrame="June 2020 - August 2020" companyID={3} />
            <br/>
            <br/>
            <h1 className="text-7xl mt-10 delayedItem">Projects</h1>
        </div>
    )
}

export default AboutDetails;