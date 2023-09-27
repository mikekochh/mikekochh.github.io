const VideoCard = ({ video, videoTitle, videoSubtitle, videoLink, githubLink }) => { 
    return (
        <div className="work-experience-card p-4 m-2 rounded-lg">
            <h1 className="text-5xl">{videoTitle}</h1><br/>
            <h2 className="text-3xl">{videoSubtitle}</h2>
            <br />
            <div className="flex">
                <div className="flex-1 mr-4 rounded-lg">
                    <video autoPlay muted loop title="testing" width="300" height="250">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>

    );
}

export default VideoCard;