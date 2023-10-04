import React from 'react'
import { AltiraserDivider } from '../utils/AltiraserDivider'
// import Ourgym from './Ourgym'

interface AltiraserProps{
  text:string;
  title:string;
  description:string;
}

export const Altiraser:React.FC<AltiraserProps>=({text, title, description})=> {
  return (
    <div className='py-8'>
        <AltiraserDivider text={text} />
        <div className="text-center py-5">
            <h1 className='text-2xl font-bold capitalize pb-2'>{title}</h1>
            <p className='text-sm'>{description}</p>
        </div>
    </div>
  )
}
