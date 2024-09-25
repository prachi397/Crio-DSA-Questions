// You are given a watchList array which holds objects with information on movies. Use reduce 
// on watchList to find the average IMDB rating of the movies directed by Christopher Nolan. 
// Return the average rating from getRating function.
// Note that the rating values are saved as strings in the object and need to be converted 
// into numbers before they are used in any mathematical operations.

function reduceMethodExtractData(watchList) {
    // You only need to implement this function.
    let filteredMovies = watchList.filter((ele)=>ele.Director==="Christopher Nolan")
  }
  
  const watchList = [
    {
      Title: "Inception",
      imdbRating: "8.8",
      Director: "Christopher Nolan",
    },
    {
      Title: "Interstellar",
      imdbRating: "8.6",
      Director: "Christopher Nolan",
    },
    {
      Title: "The Dark Knight",
      imdbRating: "9.0",
      Director: "Christopher Nolan",
    },
    {
      Title: "Batman Begins",
      imdbRating: "8.3",
      Director: "Christopher Nolan",
    },
    {
      Title: "Avatar",
      imdbRating: "7.9",
      Director: "James Cameron",
    },
  ];
  var res = reduceMethodExtractData(watchList);
  console.log(res);
  
//   if (JSON.stringify(res) == 8.675)
//     console.log("Sample test case for input passed!");
//   else console.log("Test failed");  