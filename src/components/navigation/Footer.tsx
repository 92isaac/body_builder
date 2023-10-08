import React from 'react'
import { FaFacebookF, FaInstagram, } from 'react-icons/fa'
import { FaSquareXTwitter, FaYoutube } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <footer className='md:flex justify-evenly items-center py-16 px-2 md:px-24 bg-black text-white text-sm'>
        <div className="">
            <div className='flex gap-4'>
                <FaFacebookF className="text-2xl"/>
                <FaInstagram className="text-2xl"/>
                <FaSquareXTwitter className="text-2xl"/>
                <FaYoutube className="text-2xl"/>
            </div>
            <div>
                <h3>&copy; ALTIRAL FITNESS</h3>
                <h3>ALL RIGHTS RESERVED</h3>
            </div>
        </div>
        <div className="pt-10 md:pt-0">
            <h1>FREE TRIAL / JOIN</h1>
            <h3>CONTACT * TERMS OF USE * <br/> PRIVACY POLICY * COOKIES <br/> SETTINGS</h3>
        </div>
    </footer>
  )
}
