export async function getData(id:any) {
  const url =`https://exercisedb.p.rapidapi.com/exercises${id}`;


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

export default async function page ({params}) {
  const data = await getData(params.id)
  return (
    <div>
        
    </div>
  )
}
