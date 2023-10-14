"use client";

import SearchComponent from "@/components/utils/SearchComponent";
import { UseContextGlobal } from "@/hooks/Context";
import PageData from "@/hooks/fetchdata";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Exercise {
  id: string;
  equipment: string;
  gifUrl: string;
}

export default function Page() {
  const [error, setError] = useState(false);
  const { searchData, handleSearch } = UseContextGlobal();
  const [finalData, setFinalData] = useState([]);
  const [mergedData, setMergedData] = useState(null);

  const handleSearchBtn = async () => {
    if (searchData) {
      if (mergedData !== null) {
        console.log("not empty");
        console.log(mergedData)
        const searchedExercises: any = (mergedData as any[])?.filter(
          (item: any) =>
            item.name.toLowerCase().includes(searchData) ||
            item.target.toLowerCase().includes(searchData) ||
            item.equipment.toLowerCase().includes(searchData) ||
            item.bodyPart.toLowerCase().includes(searchData)
        );
        setFinalData(searchedExercises);
      } else {
        console.log("e no reach");
        const getSearchData = async () => {
          const [
            getwaist,
            backData,
            cardioData,
            getlowerArms,
            getchest,
            getlowerlegs,
            getshoulders,
            getUpperarms,
            getUpperlegs,
            getneck,
          ] = await PageData();
          const mergedData = cardioData.concat(
            getwaist,
            backData,
            getlowerArms,
            getchest,
            // getlowerlegs,
            // getshoulders,
            // getUpperarms,
            // getUpperlegs,
            // getneck
          );

          // Save mergedData in localStorage
          localStorage.setItem("mergedData", JSON.stringify(mergedData));

          const storedMergedData = localStorage.getItem("mergedData");

          if (storedMergedData !== null) {
            const parsedMergedData = JSON.parse(storedMergedData);
            setMergedData(parsedMergedData);
          }
        };
        getSearchData();
      }
    }
  };

  useEffect(() => {
    const updateFinalData = () => {
      if (mergedData) {
        const searchedExercises: any = (mergedData as any[])?.filter(
          (item: any) =>
            item.name.toLowerCase().includes(searchData) ||
            item.target.toLowerCase().includes(searchData) ||
            item.equipment.toLowerCase().includes(searchData) ||
            item.bodyPart.toLowerCase().includes(searchData)
        );
        setFinalData(searchedExercises);
      }
    };

    updateFinalData();
  }, [mergedData, searchData]);

  // ...

  console.log(finalData);

  return (
    <main className="flex min-h-screen flex-col pt-14 md:pt-20">
      <SearchComponent
        search={searchData}
        handleChange={handleSearch}
        handleClick={() => {
          handleSearchBtn();
        }}
      />

      <div className="py-5">
        {finalData && (
          <h1 className="font-bold text-lg">
            Search result for <span className="italic">{searchData}</span>
          </h1>
        )}
      </div>
      <div className="grid grid-cols-3 gap-4">

      {finalData?.map((item: Exercise) => (
        <div key={item?.id} className="grid grid-cols-3 gap-4">
          <Link href={`/diy/${item?.id}`}>
            <Image
              src={item?.gifUrl}
              width={200}
              height={200}
              alt="exercise gif"
            />
          </Link>
        </div>
      ))}
      </div>

      { searchData && finalData.length < 1 ? <h1>No result found</h1> : null}
    </main>
  );
}
