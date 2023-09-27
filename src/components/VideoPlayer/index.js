const VideoCard = ({ video, videoTitle, videoSubtitle }) => { 
    return (
        <div className="bg-white p-4 w-5/6 rounded-lg">
            <h1 className="text-black text-5xl">{videoTitle}</h1><br/>
            <h2 className="text-black text-3xl">{videoSubtitle}</h2>
            <br />
            <div className="flex">
                <div className="flex-1 mr-4">
                    <video autoPlay muted loop title="testing" width="300" height="250">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="">
                    <p className="text-black">Testing</p>
                </div>
            </div>
        </div>

    );
}

export default VideoCard;