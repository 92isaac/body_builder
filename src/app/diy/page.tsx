import Link from "next/link";

export async function getData() {
  const url ="https://exercisedb.p.rapidapi.com/exercises";


  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "9325cd097emshdb79d348a3a8ce5p1a3a31jsn85a715f699ed",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com/exercises/bodyPartList'
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}



export default async function Page() {
  let result;

  try {
    const data= await getData() ;
    result = data;
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:pt-20">
      Coming soon...
      <Link href={'/search'}>Search</Link>
      {result.map((item:any)=>(
        <div key={item.id}>
          <h1>
          {item.equipment}
          </h1>
          <p>{item.bodyPart}</p>
          </div>
      ))}
    </main>
  );
}
