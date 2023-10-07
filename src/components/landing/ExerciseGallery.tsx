import {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  lotus,
} from "@/asset/images";
import Image from "next/image";

const ExerciseGallery = () => {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {exerciseCardData.map((data) => (
        <div className="relative items-center" key={data.id}>
          <div className="w-full my-1 md:w-[200px] md:h-[280px] lg:w-[250px] lg:h-[330px] relative overflow-hidden">
            <Image
              src={data.image}
              width={220}
              height={300}
              alt="project "
              className="projectimg w-full cursor-pointer h-full object-cover transform hover:scale-105 transition duration-1000 ease-in-out"
            />
          </div>
          <div className="hoverState absolute h-fit bottom-0 bg-black left-0 w-full text-white transition text-center opacity-100 hover:opacity-50 hover:h-[70%] z-40">
            <div className="relative">
              <div className="absolute rounded-full bg-black border-white border-2 transform left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <Image
                  src={lotus}
                  width={500}
                  height={500}
                  alt="project "
                  className="cursor-pointer p-1 w-full border rounded-full h-full object-cover"
                />
              </div>
              <h1 className="pt-7 pb-3 uppercase text-center opacity-100 z-50 relative">
                {data.title}
              </h1>
              <p className="hidden text-sm card-text z-50 relative">
                Improves strength, balance and flexibility.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseGallery;

const exerciseCardData = [
  {
    id: "1",
    image: exercise1,
    title: "Light weight",
    description: "Improves strength, balance and flexibility.",
  },
  {
    id: "2",
    image: exercise2,
    title: "the ride",
    description: "",
  },
  {
    id: "3",
    image: exercise3,
    title: "Action sport",
    description: "Improves strength, balance and flexibility.",
  },
  {
    id: "4",
    image: exercise4,
    title: "Something different ",
    description: "Improves strength, balance and flexibility.",
  },
  {
    id: "5",
    image: exercise3,
    title: "Mind body burn",
    description: "Improves strength, balance and flexibility.",
  },
  {
    id: "6",
    image: exercise1,
    title: "Light weight",
    description: "Improves strength, balance and flexibility.",
  },
];
