  // console.log(cardioData)
  // useEffect(() => {
  //   const getSearchData = async () => {
  //     const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPartList/${bodyPart}`;
  //     try {
  //       const data = await fetch(url, {
  //         method: "GET",
  //         headers: {
  //           "X-RapidAPI-Key":
  //             "9325cd097emshdb79d348a3a8ce5p1a3a31jsn85a715f699ed",
  //           "X-RapidAPI-Host":
  //             "exercisedb.p.rapidapi.com/exercises/bodyPartList",
  //         },
  //       });
  //       if (!data.ok) {
  //         throw new Error("Failed to fetch data");
  //       }

  //       const result = await data.json();
  //       setData(result);
  //       setError(false)
  //       console.log(result)
  //     } catch (e) {
  //       console.log(e);
  //       setError(true);
  //     }
  //   };
  //   getSearchData();
  // }, [bodyPart]);




  // const handleSearchBtn =  async () => {
  //   const [ cardioData, data ] = await PageData()
  //     if (searchData) {
  //       const getSearchData = async () => {
  //         // setData(...cardioData, ...data)
  
  //         // const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPartList/${searchData}`;
  //         // try {
  //         //   const data = await fetch(url, {
  //         //     method: "GET",
  //         //     headers: {
  //         //       "X-RapidAPI-Key":
  //         //         "9325cd097emshdb79d348a3a8ce5p1a3a31jsn85a715f699ed",
  //         //       "X-RapidAPI-Host":
  //         //         "exercisedb.p.rapidapi.com/exercises/bodyPartList",
  //         //     },
  //         //   });
  //         //   const result = await data.json();
  //         //   setData(result);
  //         //   // console.log(result)
  //         // } catch (e) {
  //         //   console.log(e);
  //         // }
  //         // console.log(url);
  //       };
  //       getSearchData();
  
  
  //       const searchedExercises = data.filter(
  //         (item:any) => 
  //             item.name.toLowerCase().includes(searchData) || 
  //             item.target.toLowerCase().includes(searchData) || 
  //             item.equipment.toLowerCase().includes(searchData) ||
  //             item.bodyPart.toLowerCase().includes(searchData)
  //       );
  //       setData(searchedExercises);
  //       searchData
  //     }
  // }