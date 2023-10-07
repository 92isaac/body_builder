"use client"

import React, { useEffect } from "react";

interface VideoProps {
  src: string;
  autoPlay: boolean;
  muted: boolean;
  loop: boolean;
}

export const VideoPlayer: React.FC<VideoProps> = ({
  src,
  autoPlay,
  muted,
  loop,
}) => {
  useEffect(() => {
    const iframe = document.querySelector("iframe");

    if (iframe) {
      const contentWindow = iframe.contentWindow as Window;
      const video = contentWindow.document.querySelector("video");

      if (video) {
        video.muted = muted;
        video.autoplay = autoPlay;
        video.loop = loop;
        video.controls = false;
      }
    }
  }, [src, autoPlay, muted, loop]);

  return (
    <div className="relative flex w-full justify-center items-center py-5">
      <video src={src} className="md:w-[70%] aspect-video" autoPlay={autoPlay} muted={muted} loop={loop} />
    </div>
  );
};
