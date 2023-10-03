import React from 'react'

interface AltiraserProps {
    text: string
}
export const AltiraserDivider:React.FC<AltiraserProps>=({text})=> {
  return (
    <div className='flex justify-center items-center'>
        <div className="flex justify-center items-center gap-4">
            <div className='w-16 md:w-32 h-1 rounded-lg bg-black'></div>
            <h3>{text}</h3>
            <div className='w-16 md:w-32 h-1 rounded-lg bg-black'></div>
        </div>
    </div>
  )
}
