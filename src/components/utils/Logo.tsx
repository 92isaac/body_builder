import { logo } from '@/asset/images'
import Image from 'next/image'
import React from 'react'

export const Logo = () => {
  return (
    <div className="relative flex aspect-square flex-col w-[15%] md:w-[5%] items-center justify-center">
    <Image
      src={logo}
      alt="about-us"
      layout="fill"
      className="absolute rounded-full shadow-xl cursor-pointer"
    />
  </div>
  )
}
