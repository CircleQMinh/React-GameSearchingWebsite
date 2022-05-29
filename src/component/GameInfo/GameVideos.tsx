import React, { Fragment, useState } from "react";
import IVideo from "../../interface/IVideo";
type Props = {
  videos: IVideo[] ;
};
function GameVideos(props: Props) {
  const videos = props.videos;
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  
  function handleSwitchVideo(count: number) {
    if (selectedVideoIndex + count < 0) {
      setSelectedVideoIndex(videos?.length - 1);
    }
    else if (selectedVideoIndex + count == videos.length) {
      setSelectedVideoIndex(0);
    } else {
      setSelectedVideoIndex(selectedVideoIndex + count);
    }
  }
  const video = videos[selectedVideoIndex];


  return (
    <Fragment>
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${video.video_id}`}
          frameBorder={0}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="row  justify-content-center p-0">
        <p className="mx-2 fs-3 text-center">{`Video: ${video.name} - ID: ${video.video_id}`}</p>
      </div>
      <div className=" d-flex justify-content-center align-items-center">
        <i
          className="fa-solid fa-arrow-left-long fa-xl"
          onClick={() => {
            handleSwitchVideo(-1);
          }}
        ></i>

        <p className="mx-2 fs-2">{`${(selectedVideoIndex % videos.length) + 1}/${
          videos.length
        }`}</p>

        <i
          className="fa-solid fa-arrow-right-long fa-xl"
          onClick={() => {
            handleSwitchVideo(1);
          }}
        ></i>
      </div>
    </Fragment>
  );
}

export default GameVideos;
