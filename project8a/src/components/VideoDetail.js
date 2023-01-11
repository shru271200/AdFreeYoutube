import React from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Paper, Typography } from "@material-ui/core";
// import { FaSquareFull } from 'react-icons/fa';

// Explain destructuring...
const VideoDetail = ({ video: { id: { videoId }, snippet: { title, channelTitle, description } } }) => {
  // TODO - Spinner
  const handle = useFullScreenHandle();
  if (!videoId) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
 

  return (
    <React.Fragment>
      {/* <Paper  className="paper3" elevation={6} style={{ height: "25%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
        </Paper> */}
      
      <FullScreen handle={handle}>
      <Paper  className="paper3" elevation={6} style={{ height: "100%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
        </Paper>
        <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {title} - {channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {channelTitle}
        </Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Paper>
      </FullScreen>
      <button onClick={handle.enter} className="button1">
        {/* <FaSquareFull/> */}
        Full Screen
      </button>
      
    </React.Fragment>
  );
}

export default VideoDetail;