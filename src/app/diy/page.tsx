import Banner from "@/components/diy/Banner";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9325cd097emshdb79d348a3a8ce5p1a3a31jsn85a715f699ed",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com/exercises/bodyPartList",
    },
  });
  return response.json();
};
const getCardio = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9325cd097emshdb79d348a3a8ce5p1a3a31jsn85a715f699ed",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com/exercises/bodyPartList",
    },
  });
  return response.json();
};

const getLegData = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9325cd097emshdb79d348a3a8ce5p1a3a31jsn85a715f699ed",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com/exercises/bodyPartList",
    },
  });

  return response.json();
};

export default async function Page() {
  const [data, backData, cardioData] = await Promise.all([
    getData(),
    getLegData(),
    getCardio(),
  ]);

  console.log(backData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:pt-20">
      <Banner />
      <div className="flex justify-center items-star gap-4">
        <div className="hidden md:block md:w-1/6 border min-h-screen">
          {backData.map((item: any) => (
            <div key={item?.id} className="shadow p-5 my-2 gap-y-3">
              {/* <h1>{item?.equipment}</h1>  */}
              <Image
                src={item?.gifUrl}
                width={400}
                height={200}
                alt="exercise gif"
                className="object-contain"
              />
              <p className="text-center capitalize pt-5 font-bold">{item?.target}</p>
            </div>
          ))}
        </div>
        <div className="md:5/6 lg:w-4/6 w-full min-h-screen place-items-center grid md:grid-cols-2 gap-5">
          {data.map((item: any) => (
            <div key={item?.id} className="shadow p-5 mx-auto w-[90%] md:w-auto md:mx-0">
              <Link href={`/diy/${item?.id}`}>
              <h1 className="font-bold text-2xl capitalize">{item?.name}</h1>
              <p className="font-bold">{item?.target}</p>
              <Image
                src={item?.gifUrl}
                width={500}
                height={250}
                alt="exercise gif"
                className="object-contain h-full"
              />
              <div className="flex justify-center items-center">
                  <div className="flex justify-between gap-4 nth">
                    {item?.secondaryMuscles?.map((muscle:any, index:any)=>(
                      <span key={index} className="text-sm py-1 px-1 md:px-2 lg:px-4 rounded-md shadow-2xl text-white">
                        {muscle}
                      </span>
                    ))}
                  </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden lg:block w-1/6 border min-h-screen">
          {cardioData.map((item: any) => (
            <div key={item?.id} className="shadow p-5 my-2 gap-y-3">
              {/* <h1>{item?.equipment}</h1> */}
              {/* <p>{item?.target}</p> */}
              <Image
                src={item?.gifUrl}
                width={400}
                height={200}
                alt="exercise gif"
                className="object-contain"
              />
              <p className="text-center capitalize pt-5 font-bold">{item?.target}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
