export const Options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9325cd097emshdb79d348a3a8ce5p1a3a31jsn85a715f699ed",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com/exercises/bodyPartList",
  },
  };


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
  
  export default async function PageData() {
    const [data, backData, cardioData] = await Promise.all([
      getData(),
      getLegData(),
      getCardio(),
    ]);
  
    // console.log(backData);
  
    return [ data, backData, cardioData];
  };