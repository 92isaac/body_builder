import React from 'react'
import { FaFacebookF, FaInstagram, } from 'react-icons/fa'
import { FaSquareXTwitter, FaYoutube } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <footer className='flex justify-between items-center gap-10 py-16 px-24 bg-black text-white '>
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
        <div className="">
            <h1>FREE TRIAL / JOIN</h1>
            <h3>CONTACT * TERMS OF USE * <br/> PRIVACY POLICY * COOKIES <br/> SETTINGS</h3>
        </div>
    </footer>
  )
}
