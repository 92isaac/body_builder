"use client"


import SearchComponent from "@/components/utils/SearchComponent";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Exercise {
    id: string;
    equipment: string;
    gifUrl: string;
  }


export default function Page() {
  const [data, setData] = useState([]);
  const [bodyPart, setBodyPart] = useState("chest");

  useEffect(() => {
    const getSearchData = async () => {
      const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;
      try {
        const data = await fetch(url, {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "9325cd097emshdb79d348a3a8ce5p1a3a31jsn85a715f699ed",
            "X-RapidAPI-Host":
              "exercisedb.p.rapidapi.com/exercises/bodyPartList",
          },
        });
        if (!data.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await data.json();
        setData(result);
        console.log(result)
      } catch (e) {
        console.log(e);
      }
    };
    getSearchData();
  }, [bodyPart]);

  return     <main className="flex min-h-screen flex-col pt-14 md:pt-20">
    <SearchComponent />


  {data.map((item: Exercise)=>(
    <div key={item?.id}>
        <h1>{item?.equipment}</h1>
        <Image src={item?.gifUrl} width={200} height={200} alt='exercise gif' />
    </div>
  ))}
  </main>;
}
