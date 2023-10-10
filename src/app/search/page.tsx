"use client"


import SearchComponent from "@/components/utils/SearchComponent";
import { useEffect, useState } from "react";

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

  </main>;
}
