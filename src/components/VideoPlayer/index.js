import ExperienceCard from "../ExperienceCard";

const VideoCard = ({ video, videoTitle, videoSubtitle, githubLink, languages, websiteLink, dreamOracles = false, manny = false }) => {
    return (
        <div className="rounded-xl border border-gray-200 p-3 shadow-lg job-details relative">
            <a href={websiteLink} target="_blank" rel="noreferrer">
                {/* Video at the top and full width */}
                <div className="relative">
                    <video className="w-full rounded-t-xl" autoPlay muted loop playsInline title={videoTitle}>
                        <source src={video} type="video/mp4" />
                    </video>
                    {/* Banner for GitHub */}
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noreferrer" className="absolute top-2 right-2">
                            <div className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-1 px-2 rounded">
                                View Github
                            </div>
                        </a>
                    )}
                </div>

                <div className="p-3">
                    <h1 className="golden-ratio-2 font-bold">{videoTitle}</h1>
                    <h2 className="golden-ratio-1">{videoSubtitle}</h2>
                    {dreamOracles && (
                        <ul>
                            <li><strong>170+ users</strong></li>
                            <li><strong>1000+ dreams logged</strong></li>
                        </ul>
                    )}
                    {manny && (
                        <ul>
                            <li><strong>Just launched!</strong></li>
                        </ul>
                    )}
                    <br />

                    <div className="flex flex-wrap flex-row mt-3">
                        {languages.map((language, index) => (
                            <ExperienceCard key={index} experience={language} />
                        ))}
                    </div>
                </div>
            </a>
        </div>
    );
}

export default VideoCard;
