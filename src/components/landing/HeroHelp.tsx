import { help1, help2, help3 } from "@/asset/images";
import Image from "next/image";
import React from "react";

const HeroHelp = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="md:flex justify-center items-center gap-5">
        {helpData.map((item) => (
          <div key={item.id} className="text-center w-[300px]">
            <Image
              src={item.image}
              alt="about-us"
              width={200}
              height={200}
              objectFit="contain"
              className="rounded-full mx-auto"
            />
            <h1 className="font-bold py-2">{item.title}</h1>
            <p className="text-sm leading-7">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroHelp;

const helpData = [
  {
    id: "1",
    title: "POSITIVITY",
    desc: "We are nurturers: we seek only to encourage, entertain, and empower.",
    image: help1,
  },
  {
    id: "2",
    title: "INCLUSIVITY",
    desc: "Here we keep open minds. There is no one type or way in our diverse community. Come as you are!",
    image: help2,
  },
  {
    id: "3",
    title: "FUN",
    desc: "We know serious fitness is hard, but that doesn’t mean it can’t be an edge of your seat, can’t get enough, look forward to your workouts party.",
    image: help3,
  },
];
