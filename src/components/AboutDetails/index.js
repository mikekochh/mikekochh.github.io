import './index.scss'
import { JPMorganDetails, CCLRDetails, MaxetaDetails } from './CompanyDetails';

const JobDetails = ({companyName, timeFrame, companyID}) => {

    const companyDetail = (companyID) => {
        console.log("Company ID: " + companyID);
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
            <p className="text-5xl mt-10">{companyName}</p>
            <p className="text-4xl mt-5">{timeFrame}</p>
            <div>
                {companyDetail(companyID)}
            </div>
        </div>    

    );

}

const AboutDetails = () => {

    console.log("JP Morgan Details: " + JPMorganDetails);

    console.log(JPMorganDetails);
    return (
        <div className="ml-40 font-mono font-bold text-white mb-100">
            <h1 className="mt-40 text-9xl text-center">About Me</h1>
            <p className="text-7xl mt-10">Work Experience</p>
            <JobDetails companyName="JP Morgan & Chase" timeFrame="March 2023 - Present" companyID={1} />
            <br/>
            <br/>
            <JobDetails companyName="Center City Legal & Reporting, Inc." timeFrame="May 2021 - March 2023" companyID={2} />
            <br/>
            <br/>
            <JobDetails companyName="Maxeta Technologies, Inc." timeFrame="May 2021 - March 2023" companyID={3} />
            <br/>
            <br/>
            <h1 className="text-7xl mt-10">Projects</h1>
        </div>
    )
}

export default AboutDetails;