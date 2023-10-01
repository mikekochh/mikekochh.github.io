import ExperienceCard from "../ExperienceCard";

const VideoCard = ({ video, videoTitle, videoSubtitle, githubLink, languages }) => { 
    return (
        <div className="project-card p-4 m-2 rounded-lg">
            <h1 className="text-30">{videoTitle}</h1><br/>
            <h2 className="text-12">{videoSubtitle}</h2>
            <br />
            <div className="flex">
                <div className="flex-1 mr-4 rounded-lg">
                    <video autoPlay muted loop title="testing" width="300" height="250">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div>
                    <a href={githubLink} target="_blank" rel="noreferrer">
                        <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                            GitHub
                        </button>
                    </a>
                </div>
            </div>
            <div class="flex flex-wrap flex-row">
                {languages.map((language) => (
                    <ExperienceCard experience={language} />
                ))}
            </div>
        </div>
    );
}

export default VideoCard;