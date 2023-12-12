'use client'

import ReactPlayer from 'react-player';
import React, { useEffect, useRef } from 'react';

interface VideoSectionProps {
    title: string;
    description: string;
    videoUrl: string;
    width: string;
    height: string;
}

const VideoSection = ({ title, description, videoUrl, width, height }: VideoSectionProps) => {



    return (
        <section className="overflow-hidden">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
                <p className="text-white mb-6">{description}</p>
                <div className="max-w-screen-lg mx-auto aspect-w-16 aspect-h-9">
                    <ReactPlayer
                        playing
                        loop
                        url={videoUrl}
                        width={width}
                        height={height}
                        controls={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default VideoSection;