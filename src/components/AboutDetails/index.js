import PortfolioVideo from '../../assets/videos/Portfolio-Demo.mp4';
import EstateVideo from '../../assets/videos/Demo-Desktop-Estate.mp4';
import TaskTrackerVideo from '../../assets/videos/Task-Tracker-Demo.mp4';
import DreamOraclesVideo from '../../assets/videos/Dream-Oracles.mp4';
import Resume from '../../assets/resume/Michael-Koch-Resume.pdf';
import './index.scss'
import { FreelanceDetails, JPMorganDetails, CCLRDetails, MaxetaDetails } from './CompanyDetails';
import VideoPlayer from '../VideoPlayer';

const JobDetails = ({companyName, timeFrame, companyID, companyURL}) => {

    console.log("company name: ", companyName);
    console.log("companyID: ", companyID);

    const companyDetail = (companyID) => {
        switch(companyID) {
            case 1:
                return <FreelanceDetails />;
            case 2:
                return <JPMorganDetails />;
            case 3:
                return <CCLRDetails />;
            case 4:
                return <MaxetaDetails />;
            default:
                return <div></div>;
        }
    }

    return (  
         
        <div>
            {/* Desktop */}
            <div className="rounded-xl border border-gray-200 p-3 shadow-lg job-details">
                <a href={companyURL} target="_blank" rel="noreferrer" className="flex items-center justify-between">
                    <div>
                        <p className="golden-ratio-2">{companyName}</p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
                        Hire Me
                    </button>
                </a>
                <p className="golden-ratio-1 font-bold">{timeFrame}</p>
                <div className="golden-ratio-1">
                    {companyDetail(companyID)}
                </div>
            </div>
            {/* Mobile */}  
            <div className="rounded-xl p-4 pt-1 md:w-3/4 ml-1 mr-1 project-card md:hidden">
                <a href={companyURL} target='_blank' rel="noreferrer">
                    <p className="text-30">{companyName}</p>
                    <p className="text-20">{timeFrame}</p>
                    <div>
                        {companyDetail(companyID)}
                    </div>
                </a>
            </div>  
        </div>

    );

}

const AboutDetails = ({ handleIconClick }) => {
    return (
        <div className="ml-24 md:ml-40 mb-100 about md:pl-40">
            <div className="md:mt-40 mt-10 text-center golden-ratio-4">Projects</div>
            <div className="md:w-2/3 md:mx-auto text-center md:text-left">
            <div className="business-projects-section">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="golden-ratio-3 font-bold">Business Projects</h1>
                        <h2 className="golden-ratio-1">Creating web pages that facilitate business growth and get customers to take action</h2>
                    </div>
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 golden-ratio-1 shadow-lg"
                        onClick={handleIconClick('contact')}
                    >
                        Start a project
                    </button>
                </div>
                <div className="md:flex md:flex-wrap">    
                    <div className="md:w-1/2 p-8 pl-0">
                        <VideoPlayer 
                            websiteLink="https://www.dreamoracles.co"
                            videoTitle="Dream Oracles" 
                            videoSubtitle="Website for journaling user's dreams and interpreting them using diverse AI models"
                            video={DreamOraclesVideo}  
                            languages={["NextJS 14", "Tailwind CSS", "MongoDB", "LLMs", "React"]} 
                        />
                    </div>         
                    <div className="md:w-1/2 p-8 pr-0">
                        <VideoPlayer 
                            videoTitle="Portfolio" 
                            videoSubtitle="Portfolio project for displaying experience, skillset and projects that I have worked on as a software developer." 
                            video={PortfolioVideo}
                            githubLink="https://github.com/mikekochh/portfolio"
                            languages={["ReactJS", "TailwindCSS"]}
                        />
                    </div>
                    <br/>
                    <br/>
                    <div className="md:w-1/2 p-8 pl-0">
                        <VideoPlayer 
                            videoTitle="NFT Real Estate Application" 
                            videoSubtitle="Real Estate application where each property is digitized on a blockchain and is able to be bought and sold amongst other application users." 
                            video={EstateVideo}
                            githubLink="https://github.com/mikekochh/NFT_Marketplace"
                            languages={["NextJS", "Solidity", "Hardhat", "Ethereum", "TailwindCSS"]}    
                        />
                    </div>
                    <br/>
                    <br/>
                    <div className="md:w-1/2 p-8 pr-0">
                        <VideoPlayer 
                            videoTitle="Task Tracker" 
                            videoSubtitle="Simple task tracking application where users are able add tasks, move tasks through different statuses and delete them." 
                            video={TaskTrackerVideo}
                            githubLink="https://github.com/mikekochh/Task-Tracker"   
                            languages={["ReactJS", "Vanilla CSS"]} 
                        />
                    </div>
                </div>
            </div>
            <div className="digital-products-section mt-20">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="golden-ratio-3 font-bold">Digital Products</h1>
                        <h2 className="golden-ratio-1">Turn your idea into a beautifully designed digital product that delivers an amazing user experience</h2>
                    </div>
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 golden-ratio-1 shadow-lg"
                        onClick={handleIconClick('contact')}
                    >
                        Start a project
                    </button>
                </div>
                <div className="md:flex md:flex-wrap">    
                    <div className="md:w-1/2 p-8 pl-0">
                        <VideoPlayer 
                            websiteLink="https://www.dreamoracles.co"
                            videoTitle="Dream Oracles" 
                            videoSubtitle="Website for journaling user's dreams and interpreting them using diverse AI models"
                            video={DreamOraclesVideo}  
                            languages={["NextJS 14", "Tailwind CSS", "MongoDB", "LLMs", "React"]} 
                        />
                    </div>         
                    <div className="md:w-1/2 p-8 pr-0">
                        <VideoPlayer 
                            videoTitle="Portfolio" 
                            videoSubtitle="Portfolio project for displaying experience, skillset and projects that I have worked on as a software developer." 
                            video={PortfolioVideo}
                            githubLink="https://github.com/mikekochh/portfolio"
                            languages={["ReactJS", "TailwindCSS"]}
                        />
                    </div>
                    <br/>
                    <br/>
                    <div className="md:w-1/2 p-8 pl-0">
                        <VideoPlayer 
                            videoTitle="NFT Real Estate Application" 
                            videoSubtitle="Real Estate application where each property is digitized on a blockchain and is able to be bought and sold amongst other application users." 
                            video={EstateVideo}
                            githubLink="https://github.com/mikekochh/NFT_Marketplace"
                            languages={["NextJS", "Solidity", "Hardhat", "Ethereum", "TailwindCSS"]}    
                        />
                    </div>
                    <br/>
                    <br/>
                    <div className="md:w-1/2 p-8 pr-0">
                        <VideoPlayer 
                            videoTitle="Task Tracker" 
                            videoSubtitle="Simple task tracking application where users are able add tasks, move tasks through different statuses and delete them." 
                            video={TaskTrackerVideo}
                            githubLink="https://github.com/mikekochh/Task-Tracker"   
                            languages={["ReactJS", "Vanilla CSS"]} 
                        />
                    </div>
                </div>
            </div>
            </div>

            <div className="md:mt-40 mt-10 text-center golden-ratio-4 mb-15">Work Experience</div>
                <div className="md:w-2/3 md:mx-auto text-center md:text-left">
                    <div className="work-experience-section space-y-16">
                        <div>
                            <JobDetails companyName="Freelance (Self-Employed) | Software Developer" timeFrame="March 2024 - Present" companyID={1} companyURL={"https://www.jpmorgan.com/global"} />
                        </div>
                        <div>
                            <JobDetails companyName="JP Morgan & Chase | Software Engineer" timeFrame="March 2023 - March 2024" companyID={2} companyURL={"https://www.jpmorgan.com/global"} />
                        </div>
                        <div className="">
                            <JobDetails companyName="CCLR | Software Developer" timeFrame="May 2021 - March 2023" companyID={3} companyURL={"https://www.cclrinc.com/"} />
                        </div>
                        <div className="">
                            <JobDetails companyName="Maxeta Technologies | Web Development Intern" timeFrame="June 2020 - August 2020" companyID={4} companyURL={"https://www.maxetatech.com/"} />
                        </div>
                    </div>
                </div>
            <div className="text-center mt-10">
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