import React from "react";
import { UseContextGlobal } from "@/hooks/Context";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";

const MobileNav: React.FC = () => {
  const { toggle, handleChange } = UseContextGlobal();

  return (
    <div>
      <div
        className={`${
          toggle ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 h-full w-[85%] bg-[#150E28] p-4 transition-transform transform`}
      >
        <div className="flex justify-end" onClick={handleChange}>
          <AiOutlineCloseCircle className="text-2xl text-[#FF26B9] cursor-pointer" />
        </div>
        <ul className="mt-5">
          {navItems.map((item) => (
            <li key={item.id} className="py-5">
              <Link href={item.path} className="font-[Montserrat]" onClick={handleChange}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* <Button title="Register" className="montserrat" OnClick={()=>{
          navigate('/register');
          handleChange();
        }} /> */}
      </div>
    </div>
  );
};

export default MobileNav;

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
