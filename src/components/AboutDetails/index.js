import PortfolioVideo from '../../assets/videos/Portfolio-Demo.mp4';
import EstateVideo from '../../assets/videos/Demo-Desktop-Estate.mp4';
import TaskTrackerVideo from '../../assets/videos/Task-Tracker-Demo.mp4';
import DreamOraclesVideo from '../../assets/videos/DreamOraclesDemo.mp4'
import DreamOraclesLandingPageVideo from "../../assets/videos/DreamOraclesLandingPageDemo.mp4";
import MyWallflowerVideo from "../../assets/videos/MywallflowerDemo.mp4";
import Resume from '../../assets/resume/Michael-Koch-Resume.pdf';
import './index.scss'
import { FreelanceDetails, JPMorganDetails, CCLRDetails, MaxetaDetails } from './CompanyDetails';
import VideoPlayer from '../VideoPlayer';

const JobDetails = ({companyName, timeFrame, companyID, companyURL, isMobile}) => {

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
            {!isMobile ? (
                <div className="rounded-xl border border-gray-200 p-3 shadow-lg job-details">
                    <a href={companyURL} target="_blank" rel="noreferrer" className="flex items-center justify-between">
                        <div>
                            <p className="golden-ratio-2">{companyName}</p>
                        </div>
                    </a>
                    <p className="golden-ratio-1 font-bold">{timeFrame}</p>
                    <div className="golden-ratio-1">
                        {companyDetail(companyID)}
                    </div>
                </div>
            ) : (
                <div className="rounded-xl p-4 pt-1 ml-1 mr-1">
                    <a href={companyURL} target='_blank' rel="noreferrer">
                        <p className="golden-ratio-2">{companyName}</p>
                        <p className="golden-ratio-15">{timeFrame}</p>
                        <div className="golden-ratio-125">
                            {companyDetail(companyID)}
                        </div>
                    </a>
                </div> 
            )}
        </div>

    );
}

const AboutDetails = ({ handleIconClick, isMobile }) => {
    return (
        <div className="about">
            <div className="md:w-2/3 md:mx-auto mt-20">
                <div className="business-projects-section">
                    <div className={`flex items-center justify-between ${isMobile ? 'flex-col' : ''}`}>
                        <div>
                            <h1 className="golden-ratio-3 font-bold ml-6 md:ml-0 md:pl-8">Landing Pages</h1>
                            {isMobile ? (
                                <h2 className="golden-ratio-15 ml-6 mt-5 mb-5">
                                    Creating web pages that facilitate business growth and get customers to take action
                                </h2>
                            ) : (
                                <h2 className="pl-8 golden-ratio-1 ml-0">
                                    Creating web pages that facilitate business growth and get customers to take action
                                </h2>
                            )}
                        </div>
                        <button
                            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg golden-ratio-1 whitespace-nowrap ${
                            isMobile ? 'mt-4 self-start mb-4 ml-8' : 'ml-4'}`}
                            onClick={handleIconClick('contact')}
                        >
                            Start a project
                        </button>
                    </div>
                    <div className="md:flex md:flex-wrap">    
                        <div className="md:w-1/2 md:p-8 md:pl-0 p-6">
                            <VideoPlayer 
                                websiteLink="https://www.dreamoracles.co"
                                videoTitle="Dream Oracles" 
                                videoSubtitle="A web page focused on getting people to create a dream oracles account"
                                video={DreamOraclesLandingPageVideo}  
                                githubLink={"https://github.com/mikekochh/Dream-Interpretation"}
                                languages={["NextJS 14", "Tailwind CSS", "MongoDB", "LLMs", "React", "JavaScript"]} 
                            />
                        </div>         
                        <div className="md:w-1/2 md:p-8 md:pr-0 p-6">
                            <VideoPlayer 
                                videoTitle="MyWallflower" 
                                videoSubtitle="A landing page that is focused on getting new customers to shop now." 
                                video={MyWallflowerVideo}
                                languages={["Weebly", "Sqaurespace"]}
                            />
                        </div>
                        <div className="md:w-1/2 md:p-8 md:pl-0 p-6">
                            <VideoPlayer 
                                videoTitle="Portfolio Site" 
                                videoSubtitle="Website for displaying experience, skillset, and projects that I have worked in my career." 
                                video={PortfolioVideo}
                                githubLink="https://github.com/mikekochh/react-portfolio"
                                languages={["React", "Tailwind CSS", "JavaScript"]}    
                            />
                        </div>
                    </div>
                </div>
                <div className="digital-products-section mt-20">
                    <div className={`flex items-center justify-between ${isMobile ? 'flex-col' : ''}`}>
                        <div>
                            <h1 className="golden-ratio-3 font-bold ml-6 md:ml-0 md:pl-8">Digital Products</h1>
                            {isMobile ? (
                                <h2 className="golden-ratio-15 ml-6 mt-5 mb-5">
                                    Turn your idea into a beautifully designed digital product that delivers an amazing user experience
                                </h2>
                            ) : (
                                <h2 className="pl-8 golden-ratio-1 ml-0">
                                    Turn your idea into a beautifully designed digital product that delivers an amazing user experience
                                </h2>
                            )}
                        </div>
                        <button
                            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg golden-ratio-1 whitespace-nowrap ${
                            isMobile ? 'mt-4 self-start mb-4 ml-8' : 'ml-4'}`}
                            onClick={handleIconClick('contact')}
                        >
                            Start a project
                        </button>
                    </div>
                    <div className="md:flex md:flex-wrap">    
                        <div className="md:w-1/2 md:p-8 md:pl-0 p-6">
                            <VideoPlayer 
                                websiteLink="https://www.dreamoracles.co"
                                videoTitle="Dream Oracles" 
                                videoSubtitle="Website for journaling user's dreams and interpreting them using diverse AI models."
                                video={DreamOraclesVideo}  
                                githubLink={"https://github.com/mikekochh/Dream-Interpretation"}
                                languages={["NextJS 14", "Tailwind CSS", "MongoDB", "LLMs", "React"]} 
                            />
                        </div>
                        <div className="md:w-1/2 md:p-8 md:pr-0 p-6">
                            <VideoPlayer 
                                videoTitle="NFT Real Estate Application" 
                                videoSubtitle="Real Estate application where each property is digitized on a blockchain and is able to be bought and sold." 
                                video={EstateVideo}
                                githubLink="https://github.com/mikekochh/NFT_Marketplace"
                                languages={["NextJS", "Solidity", "Hardhat", "Ethereum", "TailwindCSS"]}    
                            />
                        </div>
                    </div>
                </div>
                <div className={`flex items-center justify-between mt-20 ${isMobile ? 'flex-col' : ''}`}>
                    <div>
                        <h1 className="golden-ratio-3 font-bold ml-6 md:ml-0 md:pl-8">Professional Experience</h1>
                        {isMobile ? (
                            <h2 className="golden-ratio-15 ml-6 mt-5 mb-5">Leveraging my expertise to drive company growth and create cutting-edge digital products</h2>
                        ) : (
                            <h2 className="pl-8 golden-ratio-1 ml-0">Leveraging my expertise to drive company growth and create cutting-edge digital products</h2>
                        )}
                    </div>
                    <button 
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg golden-ratio-1 whitespace-nowrap ${
                        isMobile ? 'mt-4 self-start mb-4 ml-8' : 'ml-4'}`}
                        onClick={handleIconClick('contact')}
                    >
                        Hire Me
                    </button>
                </div>
            </div>
            <div className="md:w-2/3 md:mx-auto">
                <div className="work-experience-section md:space-y-0 space-y-8 mt-8">
                    <div className="md:p-6 pl-6 pr-6 p-0">
                        <JobDetails 
                            companyName="Freelance (Self-Employed) | Software Developer" 
                            timeFrame="March 2024 - Present" 
                            companyID={1} 
                            companyURL={"https://www.jpmorgan.com/global"} 
                            isMobile={isMobile}    
                        />
                    </div>
                    <div className="md:p-6 pl-6 pr-6 p-0">
                        <JobDetails 
                            companyName="JP Morgan & Chase | Software Engineer" 
                            timeFrame="March 2023 - March 2024" 
                            companyID={2} 
                            companyURL={"https://www.jpmorgan.com/global"} 
                            isMobile={isMobile}
                        />
                    </div>
                    <div className="md:p-6 pl-6 pr-6 p-0">
                        <JobDetails 
                            companyName="CCLR | Software Developer" 
                            timeFrame="May 2021 - March 2023" 
                            companyID={3} 
                            companyURL={"https://www.cclrinc.com/"} 
                            isMobile={isMobile}
                        />
                    </div>
                    <div className="md:p-6 pl-6 pr-6 p-0">
                        <JobDetails 
                            companyName="Maxeta Technologies | Web Development Intern" 
                            timeFrame="June 2020 - August 2020" 
                            companyID={4} 
                            companyURL={"https://www.maxetatech.com/"} 
                            isMobile={isMobile}
                        />
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