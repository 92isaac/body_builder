import React from "react";
import { FiMapPin } from "react-icons/fi";
import Location from "./Location";

export default function LocationContainer() {
  return (
    <div className="text-center py-4 text-white w-full bg-gradient-to-br from-[#FF26B9] to-[#FF5E0E] hover:from-[#FF5E0E] hover:to-[#d434fe]">
      <p>Closest club</p>
      <h1>
        Your local gym 
        <FiMapPin className="mr-2 inline-block ml-1" />
      </h1>
      <Location />
    </div>
  );
}
