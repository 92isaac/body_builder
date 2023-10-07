"use client"

import React from "react";
import { MultiColorContainer } from "./MultiColorContainer";
import { FiMapPin } from "react-icons/fi";
import { Button } from "../utils/Button";


export const MemberShipOption = () => {
  return (
    <MultiColorContainer>
      <p>Closest club</p>
      <h1>
        Your local gym
        <FiMapPin className="mr-2 inline-block ml-1" />
      </h1>
      <div>
        <Button link="/" title="see our membership options" className="text-[red] uppercase tracking-wider bg-white mt-5" OnClick={()=>{}}/>
      </div>
    </MultiColorContainer>
  );
};
