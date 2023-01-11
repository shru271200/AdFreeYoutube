import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import "../App.css"

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper className="paper2" style={{ display: "flex",
      cursor: "pointer" ,width:"200px",flexDirection:"column", padding:"10px"}} onClick={() => onVideoSelect(video)} >
        <img style={{ marginRight: "20px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default VideoItem;
