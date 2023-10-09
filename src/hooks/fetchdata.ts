export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.VITE_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com/exercises/bodyPartList'
    }
  };