import { MemberShipOption } from "@/components/landing/MemberShipOption";
import Image from "next/image";
import Link from "next/link";
import { GrPrevious } from 'react-icons/gr'


async function getData(id: string) {
  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9325cd097emshdb79d348a3a8ce5p1a3a31jsn85a715f699ed",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  });

  return response.json();
}

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

export default async function Page( params: any) {
  const data = await getData(params?.id);
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-32 md:pt-20">
      <div className="md:flex items-center justify-between px-10">
        <div className="flex-1">
        <h1 className="md:hidden block font-bold text-[30px] capitalize">{data?.name}</h1>
          <Image
            src={data?.gifUrl}
            width={500}
            height={250}
            alt="exercise gif"
            className="object-contain h-full"
          />
        </div>
        <div className="flex-1">
          <h1 className="hidden md:block font-bold text-[50px] capitalize">{data?.name}</h1>
          <p className="py-1 text-justify">
            Exercises keep you strong, assisted parallel close grip pull-up is
            one of the best exercise to target your lats. It will help you
            improve your mood and gain energy
          </p>
          <h2>
            <span className="text-lg font-bold">Target</span>:{" "}
            <span className="font-bold"> {data?.target}</span>
          </h2>
          <h3>
            <span className="text-lg font-bold">Body part</span>:{" "}
            <span className="font-bold"> {data?.bodyPart}</span>
          </h3>
          <h3>
            <span className="text-lg font-bold">Equipment</span>:
            <span className="font-bold"> {data?.equipment}</span>
          </h3>
          <div className="flex items-center pt-5">
            <div className="flex justify-between gap-4 nth">
              {data?.secondaryMuscles?.map((muscle: any, index: any) => (
                <span
                  key={index}
                  className="text-sm py-1 px-1 md:px-2 lg:px-4 rounded-md shadow-2xl text-white"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>
          <ul className="pt-5">
            {data?.instructions?.map((list: any, index: any) => (
              <li key={index} className="list-disc py-1">
                {list}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-5">
        <Link href={'/diy'} className="capitalize cursor-pointer flex items-center gap-2 shadow px-4 py-2 rounded-md bg-[#e5e5e5] ">
            < GrPrevious
                className="inline-block text-[red] "
            />
          prev
        </Link>
      </div>
      <MemberShipOption />
    </main>
  );
};

