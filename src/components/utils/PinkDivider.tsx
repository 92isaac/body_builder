import React from 'react'


export const PinkDivider =()=> {
  return (
    <div className='left-[50%] absolute transform translate-x-[-50%] translate-y-[-50%] bottom-0'>
        <div className="flex justify-center items-center gap-4">
            <div className='w-2  h-2 rounded-lg bg-[#FF5E0E]'></div>
            <div className='w-2  h-2 rounded-lg bg-[#FF5E0E]'></div>
            <div className='w-16  md:w-56 h-2 rounded-lg bg-[#FF5E0E]'></div>
            <div className='w-2   h-2 rounded-lg bg-[#FF5E0E]'></div>
        </div>
    </div>
  )
}
