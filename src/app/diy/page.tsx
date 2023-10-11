import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9325cd097emshdb79d348a3a8ce5p1a3a31jsn85a715f699ed",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com/exercises/bodyPartList",
    },
  });
  return response.json();
}
const getCardio = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9325cd097emshdb79d348a3a8ce5p1a3a31jsn85a715f699ed",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com/exercises/bodyPartList",
    },
  });
  return response.json();
}

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
}

export default async function Page() {

    const [data, backData, cardioData] = await Promise.all([getData(), getLegData(), getCardio()]);

    console.log(backData)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:pt-20">
      <Link href={"/search"}>Search</Link>

      <div className="flex justify-center items-star gap-4">
        <div className="w-1/4 border min-h-screen">
        {backData.map((item: any) => (
            <div key={item?.id} className="shadow p-5">
              <h1>{item?.equipment}</h1>
              <p>{item?.bodyPart}</p>
              <Image
                src={item?.gifUrl}
                width={400}
                height={200}
                alt="exercise gif"
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="w-2/4 min-h-screen grid grid-cols-2 gap-5">
          {data.map((item: any) => (
            <div key={item?.id} className="shadow p-5">
              <h1>{item?.equipment}</h1>
              <p>{item?.bodyPart}</p>
              <Image
                src={item?.gifUrl}
                width={500}
                height={250}
                alt="exercise gif"
                className="object-contain h-full"

              />
            </div>
          ))}
        </div>
        <div className="w-1/4 border min-h-screen">
        {cardioData.map((item: any) => (
            <div key={item?.id} className="shadow p-5">
              <h1>{item?.equipment}</h1>
              <p>{item?.bodyPart}</p>
              <Image
                src={item?.gifUrl}
                width={400}
                height={200}
                alt="exercise gif"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
