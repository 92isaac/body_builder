interface RequestOptions {
  method: string;
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
}

const Options: RequestOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9325cd097emshdb79d348a3a8ce5p1a3a31jsn85a715f699ed",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com/exercises/bodyPartList",
  },
};

const getWaist = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist";

  const response = await fetch(url, {
    method: Options.method,
    headers: Options.headers,
  });
  return response.json();
};
const getCardio = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio";

  const response = await fetch(url, {
    method: Options.method,
    headers: Options.headers,
  });
  return response.json();
};

const getLegData = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back";

  const response = await fetch(url, {
    method: Options.method,
    headers: Options.headers,
  });

  return response.json();
};
const getLowerArms = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower arms";

  const response = await fetch(url, {
    method: Options.method,
    headers: Options.headers,
  });

  return response.json();
};
const getChest = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest";

  const response = await fetch(url, {
    method: Options.method,
    headers: Options.headers,
  });

  return response.json();
};
const getLowerLegs = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower legs";

  const response = await fetch(url, {
    method: Options.method,
    headers: Options.headers,
  });

  return response.json();
};
const getShoulders = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders";

  const response = await fetch(url, {
    method: Options.method,
    headers: Options.headers,
  });

  return response.json();
};

const getUpperArms = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper arms";

  const response = await fetch(url, {
    method: Options.method,
    headers: Options.headers,
  });

  return response.json();
};

const getUpperLegs = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper legs";

  const response = await fetch(url, {
    method: Options.method,
    headers: Options.headers,
  });

  return response.json();
};
const getNeck = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/neck";

  const response = await fetch(url, {
    method: Options.method,
    headers: Options.headers,
  });

  return response.json();
};





export default async function PageData() {
  const [getwaist, backData, cardioData, getlowerArms, getchest, getlowerlegs, getshoulders, getUpperarms, getUpperlegs, getneck] = await Promise.all([
    getWaist(),
    getLegData(),
    getCardio(),
    getLowerArms(),
    getChest(),
    getLowerLegs(),
    getShoulders(),
    getUpperArms(),
    getUpperLegs(),
    getNeck(),
  ]);

  // console.log(backData);

  return [getwaist, backData, cardioData, getlowerArms, getchest, getlowerlegs, getshoulders, getUpperarms, getUpperlegs, getneck];
}
