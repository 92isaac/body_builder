import { gymInstructor } from '@/asset/images'
import Image from 'next/image'
import React from 'react'
import { PinkDivider } from '../utils/PinkDivider'

const Ourgym = () => {
  return (
    <div className='w-full h-screen relative'>
        <div className="gym-guy md:w-[70%] flex justify-center items-center mx-auto pt-10 pb-32 px-10">
            <div className="flex-1 text-white">
                <h1 className="md:text-3xl tracking-wider py-2">
                GROUP FITNESS CLASSES
                </h1>
                <p className='text-sm leading-8'>We design our clubs to give you the most awesome workouts possible. That’s why our dedicated group fitness studios are four walls of innovative, hard work, fun.</p>
            </div>
            <div className="flex-1">

            </div>
        </div>
        <Image 
         src={gymInstructor}
         alt="about-us"
         width={200}
         height={500}
         objectFit="contain"
         className="absolute cursor-pointer h-full -top-20 right-0 md:right-[20%]"
         />
         <PinkDivider />
    </div>
  )
}

export default Ourgym