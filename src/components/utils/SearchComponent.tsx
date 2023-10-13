"use client"

import React, { useState } from 'react';
import { UseContextGlobal } from '@/hooks/Context';
import { FcSearch } from 'react-icons/fc'

interface SearchComponentProps {
  search:string,
  handleChange:()=> void;
  handleClick:()=> void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({search, handleClick, handleChange}) => {
  const {isExpanded, handleSearchClick} = UseContextGlobal();


  return (
    <div className={`flex py-10 items-center transition-width duration-300 ${isExpanded ? 'w-48' : 'w-10'}`}>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 text-sm bg-gray-100 rounded-l outline-none"
        value={search}
        onChange={handleChange}
      />
      <button
        className="p-2 bg-gradient-to-br from-[#FF26B9] to-[#FF5E0E] hover:from-[#FF5E0E] hover:to-[#d434fe] text-white rounded-r cursor-pointer"
        onClick={()=>{
            handleSearchClick()
            handleClick()
        }}
        title='search btn'
      >
       <FcSearch/>
      </button>
    </div>
  );
};

export default SearchComponent;
