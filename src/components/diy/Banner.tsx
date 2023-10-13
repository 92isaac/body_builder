import { banner } from "@/asset/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
      <div className="md:flex justify-center gap-5 items-center py-10">
        <div className="flex-1 relative px-1">
          <div className="mt-16">
            <h1 className="text-5xl font-black">
              Sweet, Smile <br /> and repeat
            </h1>
            <p className="mb-3">Check effective exercise</p>
            <Link href={"/search"} className="border py-2 px-4 rounded-md bg-gradient-to-br from-[#FF26B9] to-[#FF5E0E] text-white">Search / Explore</Link>
          </div>

          <div className="">
            <h1 className="text-[#FF2625] text-[70px] md:text-[90px] lg:text-[180px] opacity-[0.2] ">
              Exercise
            </h1>
          </div>
        </div>
        <div className=" md:block flex-1">
          <Image
            src={banner}
            width={200}
            height={200}
            alt="banner"
            className="object-contain"
            layout="responsive"
          />
        </div>
      </div>
  );
};

export default Banner;
