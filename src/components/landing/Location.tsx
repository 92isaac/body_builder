"use client"

import { FiMapPin } from 'react-icons/fi';
import { Button } from '../utils/Button';

const Location:React.FC = () => {
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
        alert('Geolocation is not supported by this browser.');
      }
    };
  
    return (
        <>
        {/* <FiMapPin className="mr-2" /> */}
        <Button
        title="Get Location"
        className="mt-4  pt-2 from-[#FF26B9] to-[#FF5E0E] hover:from-[#FF5E0E] hover:to-[#d434fe]"
        link="/"
        OnClick={()=>{getLocation()}}
      />
        </>
      
    );
  };

export default Location