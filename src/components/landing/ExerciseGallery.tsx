import { exercise1, lotus } from "@/asset/images";
import Image from "next/image";

const ExerciseGallery = () => {
  return (
    <div className="relative">
      <div className="w-full my-1 md:w-[200px] md:h-[280px] lg:w-[220px] lg:h-[300px] relative overflow-hidden">
        <Image
          src={exercise1}
          width={220}
          height={300}
          alt="project "
          className="projectimg w-full cursor-pointer h-full object-cover transform hover:scale-105 transition duration-1000 ease-in-out"
        />
      </div>
      <div className="hoverState absolute h-fit bottom-0 bg-black left-0 w-full text-white transition text-center opacity-100 hover:opacity-50 hover:h-[70%]">
        <div className="relative">
          <div className="absolute rounded-full bg-black border-white border-4 transform left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Image
              src={lotus}
              width={500}
              height={500}
              alt="project "
              className="cursor-pointer p-2 w-full border rounded-full h-full object-cover"
            />
          </div>
          <h1 className="text-lg pt-7 text-center opacity-100">Light weight</h1>
          <p className="hidden text-sm card-text">
            Improves strength, balance and flexibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseGallery;
