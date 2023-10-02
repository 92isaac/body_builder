"use client"

// import { heroImage } from '@/asset/images'
import React from "react";
import { Button } from "../utils/Button";

export const Hero = () => {
  return (
    <div className="h-screen w-full hero-bg flex justify-center items-center">
      <div className="text-white text-center">
        <h1 className="uppercase font-extrabold text-4xl font-mono py-3 tracking-widest">
          <span className="text-[#FF5E0E]">No</span> Pain,
          <span className="text-[#FF5E0E]">No</span> GAIN.
        </h1>
        <p className="text-sm font-bold">Membership starts at $50/month</p>
        <div className="flex justify-center items-center">
          <Button
            title="Join Now"
            className="mt-4  pt-2 from-[#FF26B9] to-[#FF5E0E] hover:from-[#FF5E0E] hover:to-[#d434fe]"
            link="/"
            OnClick={()=>{}}
          />
        </div>
      </div>
    </div>
  );
};
