"use client";

import { Button } from "../utils/Button";

const Location: React.FC = () => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          alert(`Error getting location: ${error.message}`);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="flex justify-center items-center gap-5">
      <Button
        title="Get Location"
        className="mt-4  pt-2  bg-white text-[rgb(255,94,14)]"
        link=""
        OnClick={() => {
          getLocation();
        }}
      />
      <Button
        title="Join Now"
        className="mt-4  pt-2 bg-white text-[rgb(255,94,14)]"
        link="/"
        OnClick={() => {
        }}
      />
    </div>
  );
};

export default Location;
