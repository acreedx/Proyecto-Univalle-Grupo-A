import React from "react";

interface VideoPlayerProps {
  url: string;
  width: string;
  height: string;
}

function VideoPlayer({ url, width, height }: VideoPlayerProps) {
  return (
    <video width={width} height={height} controls>
      <source src={url} type="video/mp4" />
      Tu navegador no admite la reproducción de video.
    </video>
  );
}

export default VideoPlayer;
