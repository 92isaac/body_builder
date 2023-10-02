"use client"

import { Logo } from "@/components/utils/Logo";
import { UseContextGlobal } from "@/hooks/Context";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import MobileNav from "./MobileNav";

export const Navbar = () => {
  const { toggle, handleChange } = UseContextGlobal()
  return (
    <nav className="fixed bg-black w-full py-2 text-white px-5 md:px-10">
      <div className=" flex justify-between items-center gap-5 ">

    <Logo />
      <ul className="hidden md:flex justify-between gap-5 items-center">
      {navItems.map((item) => (
            <li key={item.id} className="py-5">
              <Link href={item.path} className="font-[Montserrat]" onClick={handleChange}>
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
      <div className="hidden md:flex justify-center items-center gap-5">
        <button>Free Trial</button>
        <button>Join us</button>
      </div>
      <div className="md:hidden" onClick={handleChange}>
       {
        !toggle && (  <AiOutlineMenu className="font-bold text-2xl inline-block" /> )
       }
      </div>
      {toggle && <MobileNav />}
      </div>
    </nav>
  );
};


const navItems = [
  {
    id: "1",
    name: "Home",
    path: "/",
  },
  {
    id: "2",
    name: "Service",
    path: "/service",
  },
  {
    id: "3",
    name: "DIY",
    path: "/diy",
  },
  {
    id: "4",
    name: "Contact Us",
    path: "/contact",
  },
];
