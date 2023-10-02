import Link from 'next/link';
import React from 'react'

interface ButtonProps{
    title: string;
    className: string;
    link: string;
    OnClick : any | null;
}

export const Button:React.FC<ButtonProps> = ({className, title, link, OnClick}) => {
  return (
    <div>
        <button className={`border-0 text-white px-5 py-1.5 rounded-sm bg-gradient-to-br ${className}`}  type='button' onClick={OnClick}><Link href={link}>{title}</Link></button>
    </div>
  )
}
