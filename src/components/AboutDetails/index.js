import PortfolioVideo from '../../assets/videos/Portfolio-Project-Demo-1.mp4';
import EstateVideo from '../../assets/videos/Demo-Desktop-Estate.mp4';
import Resume from '../../assets/resume/Michael-Koch-Resume.pdf';
import './index.scss'
import { JPMorganDetails, CCLRDetails, MaxetaDetails } from './CompanyDetails';
import VideoPlayer from '../VideoPlayer';

const JobDetails = ({companyName, timeFrame, companyID, companyURL}) => {

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
        <div className="rounded-xl p-4 pt-1 md:w-3/4 ml-1 mr-1 work-experience-card preload">
            <a href={companyURL} target='_blank' rel="noreferrer">
                <p className="text-30">{companyName}</p>
                <p className="text-20">{timeFrame}</p>
                <div>
                    {companyDetail(companyID)}
                </div>
            </a>
        </div>    

    );

}

const AboutDetails = () => {
    return (
        <div className="font-mono ml-24 md:ml-40 font-bold mb-100 about md:pl-40">
            <div className="md:mt-40 mt-10 md:text-100 text-60 text-center preload">About Me</div>
            <p className="md:text-60 text-30 md:mb-5 md:text-left text-center preload">
                Work Experience
            </p>
            <JobDetails companyName="JP Morgan & Chase" timeFrame="March 2023 - Present" companyID={1} companyURL={"https://www.jpmorgan.com/global"} />
            <br/>
            <br/>
            <JobDetails companyName="Center City Legal & Reporting, Inc." timeFrame="May 2021 - March 2023" companyID={2} companyURL={"https://www.cclrinc.com/"} />
            <br/>
            <br/>
            <JobDetails companyName="Maxeta Technologies, Inc." timeFrame="June 2020 - August 2020" companyID={3} companyURL={"https://www.maxetatech.com/"} />
            <br/>
            <br/>
            <h1 className="text-60 mt-10 text-center md:text-left preload">Projects</h1><br />
            <div className="md:flex justify-evenly md:flex-3 md:pr-16 md:flex-wrap">            
                <div className="md:w-1/3 preload">
                    <VideoPlayer 
                        videoTitle="Portfolio" 
                        videoSubtitle="Portfolio project for displaying experience, skillset, and projects that I have worked on for clients. Built and inspired entirely by me." 
                        video={PortfolioVideo}
                        githubLink="https://github.com/mikekochh/portfolio"
                        languages={["ReactJS", "TailwindCSS"]}
                    />
                </div>
                <br/>
                <br/>
                <div className="md:w-1/3 preload">
                    <VideoPlayer 
                        videoTitle="NFT Real Estate Application" 
                        videoSubtitle="Real Estate application built on blockchain technology. Each property is digitized and is able to be bought and sold amongst other application users." 
                        video={EstateVideo}
                        githubLink="https://github.com/mikekochh/NFT_Marketplace"
                        languages={["NextJS", "Solidity", "Hardhat", "Ethereum", "TailwindCSS"]}    
                    />
                </div>
                <br/>
                <br/>
                <div className="md:w-1/3 preload">
                    <VideoPlayer 
                        videoTitle="Task Tracker" 
                        videoSubtitle="Simple task tracking application. Built entirely using React and Vanilla CSS." 
                        video={EstateVideo}
                        githubLink="https://github.com/mikekochh/Task-Tracker"   
                        languages={["ReactJS", "Vanilla CSS"]} 
                    />
                </div>    
            </div>
            <div className="text-center mt-10 preload">
                <a href={Resume} download="Michael-Koch-Resume">
                    <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg text-15">
                        Download Full Resume (PDF)
                    </button>
                </a>
            </div>
        </div>
    )
}

export default AboutDetails;