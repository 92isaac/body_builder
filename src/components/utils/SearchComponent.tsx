"use client"

import { UseContextGlobal } from '@/hooks/Context';
import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc'

interface SearchComponentProps {
  // Define any props here (if needed)
}

const SearchComponent: React.FC<SearchComponentProps> = () => {
    const { searchData, handleSearch } = UseContextGlobal()
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchClick = () => {
    setIsExpanded(!isExpanded);
    console.log('first')
  };

  return (
    <div className={`flex py-10 items-center transition-width duration-300 ${isExpanded ? 'w-48' : 'w-10'}`}>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 text-sm bg-gray-100 rounded-l outline-none"
        value={searchData}
        onChange={handleSearch}
      />
      <button
        className="p-2 bg-gradient-to-br from-[#FF26B9] to-[#FF5E0E] hover:from-[#FF5E0E] hover:to-[#d434fe] text-white rounded-r cursor-pointer"
        onClick={handleSearchClick}
        title='search btn'
      >
       <FcSearch/>
      </button>
    </div>
  );
};

export default SearchComponent;
