function mapExtractData(watchList) {
    // You only need to implement this function.
   return  watchList.map((ele)=>{
      return {title: ele.Title};
    })
  }
  
  const watchList = [
    {
      Title: "Inception",
      imdbRating: "8.8",
    },
    {
      Title: "Interstellar",
      imdbRating: "8.6",
    },
    {
      Title: "The Dark Knight",
      imdbRating: "9.0",
    },
    {
      Title: "Batman Begins",
      imdbRating: "8.3",
    },
    {
      Title: "Avatar",
      imdbRating: "7.9",
    },
  ];
var res = mapExtractData(watchList);

if (
  JSON.stringify(res) ==
  JSON.stringify([
    { title: "Inception" },
    { title: "Interstellar" },
    { title: "The Dark Knight" },
    { title: "Batman Begins" },
    { title: "Avatar" },
  ])
)
  console.log("Sample test case for input passed!");
else console.log("Test failed");