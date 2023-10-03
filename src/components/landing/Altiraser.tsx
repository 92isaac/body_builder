import React from 'react'
import { AltiraserDivider } from '../utils/AltiraserDivider'
// import Ourgym from './Ourgym'

export default function Altiraser() {
  return (
    <div className='py-8'>
        <AltiraserDivider text='Altiraser #1'/>
        <div className="text-center py-5">
            <h1 className='text-2xl font-bold capitalize pb-2'>Our gym is your  gym</h1>
            <p className='text-sm'>Kick your feet up! With a gym designed around you, we think you’ll love it here.</p>
        </div>
        {/* <Ourgym /> */}
    </div>
  )
}
