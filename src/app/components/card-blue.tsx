'use client'
import React from "react";
import ReactPlayer from 'react-player';


interface CardLightRedProps {
  title: string;
  videoUrl: string;
  width: string;
  height: string;
  info: string;
}

function CardLightRed({ title, videoUrl, width, height, info }: CardLightRedProps) {
  return (
    <div className="mx-3 flex flex-col items-center min-h-min justify-center p-6 bg-red-300 border border-red-300 rounded-xl drop-shadow-lg shadow text-white">
      <h5 className="mb-2 font-bold tracking-tight text-white text-sm min-[160px]:text-lg min-[320px]:text-xl sm:text-2xl md:text-3xl">
        {title}
      </h5>
      <ReactPlayer
        url={videoUrl}
        width={width}
        height={height}
        controls={true}
      />
      <div className="text-center mt-4">
        <p className="text-white text-xs min-[160px]:text-base min-[320px]:text-md sm:text-xl md:text-2xl text-justify">
          {info}
        </p>
      </div>
    </div>
  );
}

export default CardLightRed;
