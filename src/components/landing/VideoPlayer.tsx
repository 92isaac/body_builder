"use client";

import React, { useEffect } from "react";

interface VideoProps {
  src: string;
  title: string;
}

export const VideoPlayer: React.FC<VideoProps> = ({ src, title }) => {
  useEffect(() => {
    const iframe = document.querySelector("iframe");

    if (iframe) {
      const contentWindow = iframe.contentWindow as Window;
      const video = contentWindow.document.querySelector("video");

      if (video) {
        video.muted = true;
      }

      if (video) {
        video.autoplay = true;
      }

      if (video) {
        video.controls = false;
      }
    }
  }, []);

  return (
    <div className="relative flex w-full justify-center items-center">
      <iframe
        src={src}
        title={title}
        className="w-[70%] aspect-video"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};
